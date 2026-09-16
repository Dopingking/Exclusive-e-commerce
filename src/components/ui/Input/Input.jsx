import "./Input.scss";

function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  error,
}) {
  return (
    <div className="input-group">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={error ? "error" : ""}
      />

      {error && <small>{error}</small>}
    </div>
  );
}

export default Input;