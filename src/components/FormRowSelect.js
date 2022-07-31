const FormRowSelect = ({
  labelText, name, value, handleChange, list,
}) => (
  <div className="form-row">
    <label htmlFor={name} className="form-label">
      {labelText || name}
    </label>
    <select
      name={name}
      id={name}
      value={value}
      onChange={handleChange}
      className="form-select"
    >
      {list.map((itemValue, indx) => (
        <option key={indx} value={itemValue}>
          {itemValue}
        </option>
      ))}
    </select>
  </div>
);

export default FormRowSelect;
