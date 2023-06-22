function Question({ currQuestion }) {
  const { question, options, correctOption, points } = currQuestion;
  return <div>{question}</div>;
}

export default Question;
