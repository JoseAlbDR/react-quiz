function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2 className="center">Welcome to The JavaScript QUIZ!</h2>
      <h3 className="center">
        {numQuestions} question to test your JavaScript knowledge
      </h3>
      <div className="start-options">
        <div>
          <h4>Num Questions:</h4>
          <select className="btn">
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>
        </div>
        <div>
          <h4>Difficulty</h4>
          <select className="btn">
            <option value={45}>Easy</option>
            <option value={30}>Normal</option>
            <option value={15}>Hard</option>
          </select>
        </div>
      </div>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start!!!
      </button>
    </div>
  );
}

export default StartScreen;
