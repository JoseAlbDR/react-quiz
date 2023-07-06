import { useQuiz } from "../context/QuizContext";

function Progress() {
  const { currQuestion, numQuestions, score, maxScore, answer } = useQuiz();
  return (
    <div className="progress">
      <progress
        max={numQuestions}
        value={currQuestion + +(answer !== null)}
      ></progress>
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
