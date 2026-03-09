import "./button.scss";

const Button = ({ children, variant = "primary", type = "button" }) => {
  return (
    <button className={`btn btn--${variant}`} type={type}>
      {children}
    </button>
  );
};

export default Button;
