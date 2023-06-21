// import DateCounter from "./DateCounter";

import Header from "./Header";
import Main from "./Main";
import { useEffect, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "setQuestions":
      return { ...state, questions: action.payload };
    default:
      throw new Error("Unknow action.");
  }
}

export default function App() {
  const initialState = { questions: [] };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions } = state;

  console.log(questions);

  useEffect(function () {
    async function getData() {
      try {
        const res = await fetch("http://localhost:8000/questions");
        if (!res.ok) throw new Error("Something happened.");
        const data = await res.json();
        dispatch({ type: "setQuestions", payload: data });
      } catch (err) {
        console.log(err.message);
      }
    }
    getData();
  }, []);

  return (
    <div className="app">
      <Header />

      <Main>
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}
