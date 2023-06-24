function FinishScreen({ score, maxScore, dispatch, highScore }) {
  const percentaje = (score / maxScore) * 100;
  let emoji;

  if (percentaje === 100) emoji = "⭐";
  if (percentaje < 100 && percentaje >= 80) emoji = "💪";
  if (percentaje < 80 && percentaje >= 60) emoji = "🎉";
  if (percentaje < 60 && percentaje >= 40) emoji = "👍";
  if (percentaje < 40 && percentaje >= 20) emoji = "👌";
  if (percentaje < 20 && percentaje >= 0) emoji = "🤦‍♂️";
  if (percentaje === 0) emoji = "🤢";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        Tu puntuación <strong>{score}</strong> de {maxScore} (
        {Math.ceil(percentaje)}%)
      </p>
      <p className="highscore">(Highscore: {highScore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Reiniciar Quiz
      </button>
    </>
  );
}

export default FinishScreen;
