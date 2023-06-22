function Progress({ currQuestion, numQuestions, score, maxScore }) {
  return (
    <div className="progress">
      <progress value={(currQuestion + 1) / numQuestions}></progress>
      <p>
        Question <strong>{currQuestion + 1}</strong>/{numQuestions}
      </p>
      <p>
        <strong>{score}</strong>/{maxScore} points
      </p>
    </div>
  );
}

export default Progress;
