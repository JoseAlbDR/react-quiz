// import DateCounter from "./DateCounter";

import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import Question from "./Question";
import { useEffect, useReducer } from "react";
import StartScreen from "./StartScreen";

// "loading", "error", "ready", "active", "finished"
const initialState = {
  questions: [],
  status: "loading",
  errorMsg: "",
  currQuestion: 0,
  answer: null,
  score: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataRecieved":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error", errorMsg: action.payload };
    case "start":
      return { ...state, status: "active" };
    case "newAnswer":
      const question = state.questions.at(state.currQuestion);
      return {
        ...state,
        answer: action.payload,
        score:
          // action.payload = selected index
          action.payload === question.correctOption
            ? state.score + question.points
            : state.score,
      };
    case "nextQuestion":
      return { ...state, currQuestion: state.currQuestion++, answer: null };
    default:
      throw new Error("Unknow action.");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status, errorMsg, currQuestion, answer, score } = state;

  useEffect(function () {
    async function getData() {
      try {
        // dispatch({ type: "loading" });
        const res = await fetch("http://localhost:8000/questions");
        if (!res.ok) throw new Error("Something happened.");
        const data = await res.json();
        if (!data) throw new Error("No data.");
        dispatch({ type: "dataRecieved", payload: data });
      } catch (err) {
        console.log(err.message);
        dispatch({ type: "dataFailed", payload: err.message });
      }
    }
    getData();
  }, []);

  return (
    <div className="app">
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error msg={errorMsg} />}
        {status === "ready" && (
          <StartScreen numQuestions={questions.length} dispatch={dispatch} />
        )}
        {status === "active" && (
          <Question
            currQuestion={questions[currQuestion]}
            dispatch={dispatch}
            answer={answer}
            score={score}
          />
        )}
      </Main>
    </div>
  );
}
