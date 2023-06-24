function SelectOption({ label, options, dispatch }) {
  return (
    <div>
      <div>
        <h4>{label}</h4>
        <select
          className="btn"
          onChange={(e) => dispatch({ type: label, payload: e.target.value })}
        >
          {options.map((option) => (
            <option key={option.name} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SelectOption;
