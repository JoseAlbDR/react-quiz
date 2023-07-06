import { useQuiz } from "../context/QuizContext";
import Options from "./Options";

function Question() {
  const { currQuestion, questions } = useQuiz();
  const { question, options, correctOption } = questions[currQuestion];

  return (
    <div>
      <h4>{question}</h4>
      <Options options={options} correctOption={correctOption} />
    </div>
  );
}

export default Question;
