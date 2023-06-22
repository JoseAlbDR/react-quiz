function Options({ options }) {
  return (
    <div className="options">
      {options.map((option, i) => (
        <button
          key={option}
          className={`btn btn-option `}
          // onClick={() => handleAsnwer(i)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
