import "./input.scss";

const Input = ({ label, type = "text", placeholder }) => {
  return (
    <div className="input">
      {label && <label className="input__label">{label}</label>}

      <input
        className="input__field"
        name={label}
        id={label}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
