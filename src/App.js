// import DateCounter from "./DateCounter";

import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import { useEffect, useReducer } from "react";

// "loading", "error", "ready", "active", "finished"
const initialState = { questions: [], status: "loading" };

function reducer(state, action) {
  switch (action.type) {
    case "dataRecieved":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    default:
      throw new Error("Unknow action.");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status } = state;

  console.log(questions);

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
        dispatch({ type: "dataFailed" });
      }
    }
    getData();
  }, []);

  return (
    <div className="app">
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
      </Main>
    </div>
  );
}
