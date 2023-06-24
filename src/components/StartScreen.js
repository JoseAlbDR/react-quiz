function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2 className="center">Bienvenido al Quiz de JavaScript!</h2>
      <h3 className="center">
        {numQuestions} preguntas para probar tu conocimiento en JavaScript
      </h3>
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
