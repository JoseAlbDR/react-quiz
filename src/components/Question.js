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
      {answer !== null && (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      )}
    </div>
  );
}

export default Question;
