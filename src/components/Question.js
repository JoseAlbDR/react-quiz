import Options from "./Options";

function Question({ currQuestion, dispatch, answer }) {
  const { question, options, correctOption, points } = currQuestion;

  return (
    <div>
      <h4>{question}</h4>
      <Options
        options={options}
        dispatch={dispatch}
        answer={answer}
        correctOption={correctOption}
      />
    </div>
  );
}

export default Question;
