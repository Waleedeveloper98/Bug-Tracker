import "./select.scss";

const Select = ({ label, children,value,onChange }) => {
  return (
    <div className="select">

      {label && <label className="select__label">{label}</label>}

      <select value={value} onChange={onChange} className="select__field">
        {children}
      </select>

    </div>
  );
};

export default Select;