function Options({
  options,
  dispatch,
  answer,
  correctOption,
  reviewQuestions,
}) {
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
          ${
            reviewQuestions || answered
              ? i === correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          onClick={() => handleAnswer(i)}
          disabled={reviewQuestions || answered}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
