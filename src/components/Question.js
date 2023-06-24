import Options from "./Options";
import Prism from "prismjs";

import { useEffect } from "react";

function Question({ currQuestion, dispatch, answer, score }) {
  const { question, options, correctOption, code } = currQuestion;

  useEffect(() => {
    Prism.highlightAll();
  }, [currQuestion]);

  return (
    <div>
      <h4>{question}</h4>
      <pre className="language-javascript">
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
