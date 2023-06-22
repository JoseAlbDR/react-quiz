import { useState } from "react";
import Options from "./Options";

function Question({ currQuestion }) {
  const [isCorrect, setIsCorrect] = useState(false);
  const { question, options, correctOption, points } = currQuestion;

  function handleAsnwer(i) {
    i === correctOption ? setIsCorrect(true) : setIsCorrect(false);
  }

  return (
    <div>
      <h4>{question}</h4>
      <Options options={options} />
    </div>
  );
}

export default Question;
