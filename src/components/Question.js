import Options from "./Options";

function Question({ currQuestion, dispatch }) {
  const { question, options, correctOption, points } = currQuestion;

  return (
    <div>
      <h4>{question}</h4>
      <Options options={options} dispatch={dispatch} />
    </div>
  );
}

export default Question;
