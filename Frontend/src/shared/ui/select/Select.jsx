import "./select.scss";

const Select = ({ label, children }) => {
  return (
    <div className="select">

      {label && <label className="select__label">{label}</label>}

      <select className="select__field">
        {children}
      </select>

    </div>
  );
};

export default Select;