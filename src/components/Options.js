import { useQuiz } from "../context/QuizContext";

function Options({ options, correctOption }) {
  const { dispatch, answer } = useQuiz();
  function handleAnswer(i) {
    dispatch({ type: "newAnswer", payload: i });
  }

  const answered = answer !== null;
  return (
    <div className="options">
      {options.map((option, i) => (
        <button
          key={option}
          className={`btn btn-option
          ${i === answer ? "answer" : ""} 
          ${answered ? (i === correctOption ? "correct" : "wrong") : ""}`}
          onClick={() => handleAnswer(i)}
          disabled={answered}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
