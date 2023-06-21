// import DateCounter from "./DateCounter";

import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import { useEffect, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "setQuestions":
      return { ...state, questions: action.payload };
    // case "isLoading":
    //   return { ...state, isLoading: true };
    case "isNotLoading":
      return { ...state, isLoading: false };
    case "error":
      return { ...state, error: action.payload };
    // case "cleanError":
    //   return { ...state, error: "" };
    case "fetching":
      return { ...state, error: "", isLoading: true };
    default:
      throw new Error("Unknow action.");
  }
}

export default function App() {
  const initialState = { questions: [], isLoading: false, error: "" };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, isLoading, error } = state;

  console.log(questions);

  useEffect(function () {
    async function getData() {
      try {
        // dispatch({ type: "cleanError" });
        // dispatch({ type: "isLoading" });
        dispatch({ type: "fetching" });
        const res = await fetch("http://localhost:8000/questions");
        if (!res.ok) throw new Error("Something happened.");
        const data = await res.json();
        if (!data) throw new Error("No data.");
        dispatch({ type: "setQuestions", payload: data });
      } catch (err) {
        console.log(err.message);
        dispatch({ type: "error", payload: err.message });
      } finally {
        dispatch({ type: "isNotLoading" });
      }
    }
    getData();
  }, []);

  return (
    <div className="app">
      <Header />

      <Main>
        {isLoading && !error && <Loader />}
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}
