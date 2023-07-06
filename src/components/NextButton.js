import { useQuiz } from "../context/QuizContext";

function NextButton({ children }) {
  const { dispatch } = useQuiz();
  return (
    <button
      className="btn btn-ui"
      onClick={() =>
        dispatch({ type: children === "Next" ? "nextQuestion" : "finish" })
      }
    >
      {children}
    </button>
  );
}

export default NextButton;
