import { useQuiz } from "../context/QuizContext";

function NextButton({ children }) {
  console.log(children);
  const { dispatch, currQuestion, questions, answer } = useQuiz();
  if (answer !== null)
    return (
      <button
        className="btn btn-ui"
        onClick={() =>
          dispatch({
            type:
              currQuestion + 1 < questions.length ? "nextQuestion" : "finish",
          })
        }
      >
        {currQuestion + 1 === questions.length ? "Finish" : "Next"}
      </button>
    );
}

export default NextButton;
