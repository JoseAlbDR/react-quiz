function NextButton({ dispatch, children }) {
  return (
    <button
      className="btn btn-ui"
      onClick={() =>
        dispatch({ type: children === "Siguiente" ? "nextQuestion" : "finish" })
      }
    >
      {children}
    </button>
  );
}

export default NextButton;
