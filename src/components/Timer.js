import { useEffect } from "react";

function Timer({ seconds, dispatch }) {
  useEffect(
    function () {
      const timer = setInterval(function () {
        // console.log("tick");
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(timer);
    },
    [dispatch]
  );

  return <div className="timer">{seconds}</div>;
}

export default Timer;
