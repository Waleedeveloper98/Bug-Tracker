import Button from "../../../shared/components/button/Button";
import Input from "../../../shared/ui/input/Input";
import "../style/loginForm.scss";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <form className="login-form">
      <Input type="email" label={"email"} placeholder={"Enter your email"} />

      <Input
        type="password"
        label={"Password"}
        placeholder={"Enter password"}
      />

      <Button type="submit">Login</Button>

      <p className="auth-link">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </form>
  );
};

export default LoginForm;
