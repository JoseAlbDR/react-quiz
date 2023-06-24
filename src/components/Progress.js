function Progress({ currQuestion, numQuestions, score, maxScore, answer }) {
  return (
    <div className="progress">
      <progress
        max={numQuestions}
        value={currQuestion + +(answer !== null)}
      ></progress>
      <p>
        Pregunta <strong>{currQuestion + 1}</strong>/{numQuestions}
      </p>
      <p>
        <strong>{score}</strong>/{maxScore} puntos
      </p>
    </div>
  );
}

export default Progress;
