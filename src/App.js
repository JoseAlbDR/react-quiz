// import DateCounter from "./DateCounter";

import Header from "./Header";
import Main from "./Main";
import { useEffect } from "react";
export default function App() {
  useEffect(function () {
    async function getData() {
      try {
        const res = await fetch("http://localhost:8000/questions");
        if (!res.ok) throw new Error("Something happened.");
        const data = await res.json();
        console.log(data);
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
