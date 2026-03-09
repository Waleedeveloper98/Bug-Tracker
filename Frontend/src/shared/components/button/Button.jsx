import "./button.scss";

const Button = ({
  children,
  variant = "primary",
  type = "button",
  handleSubmit,
}) => {
  return (
    <button
      onClick={handleSubmit}
      className={`btn btn--${variant}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
