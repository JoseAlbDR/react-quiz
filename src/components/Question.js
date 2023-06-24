import Options from "./Options";
import Prism from "prismjs";

import { useEffect } from "react";

function Question({ currQuestion, dispatch, answer, score }) {
  const { question, options, correctOption, code } = currQuestion;
  console.log(currQuestion);
  console.log(code);
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div>
      <h4>{question}</h4>
      <pre>
        <code className="language-javascript">{code}</code>
      </pre>

      <Options
        options={options}
        dispatch={dispatch}
        answer={answer}
        correctOption={correctOption}
        score={score}
      />
    </div>
  );
}

export default Question;
