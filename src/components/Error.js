import { useQuiz } from "../context/QuizContext";

function Error() {
  const { msg } = useQuiz();
  return (
    <p className="error">
      <span>💥</span> {msg || "There was an error fecthing questions."}
    </p>
  );
}

export default Error;
