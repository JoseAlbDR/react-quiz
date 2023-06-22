function Progress({ currQuestion, numQuestions, score, maxScore }) {
  console.log(maxScore);
  return (
    <div className="progress">
      <progress></progress>
      <p>
        Question {currQuestion + 1}/{numQuestions}
      </p>
      <p>
        {score}/{maxScore} points
      </p>
    </div>
  );
}

export default Progress;
