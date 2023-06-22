function StartScreen({ questions }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{questions} questions to test your React knowledge</h3>
      <button className="btn">Let's Start!!!</button>
    </div>
  );
}

export default StartScreen;
