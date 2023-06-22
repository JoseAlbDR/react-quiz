import Options from "./Options";

function Question({ currQuestion, dispatch, answer, score }) {
  const { question, options, correctOption } = currQuestion;

  return (
    <div>
      <h4>{question}</h4>
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
