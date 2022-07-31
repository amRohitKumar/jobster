function FormRow({ type, name, value, handleChange, labelText }) {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {name}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className="form-input"
        id={name}
      />
    </div>
  );
}

export default FormRow;
