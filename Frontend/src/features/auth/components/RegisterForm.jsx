import Button from "../../../shared/components/button/Button";
import Input from "../../../shared/ui/input/Input";
import "../style/registerForm.scss";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <form className="register-form">
      <Input type="text" label={"username"} placeholder={"Enter username"} />

      <Input type="email" label={"email"} placeholder={"Enter email"} />

      <Input
        type="password"
        label={"password"}
        placeholder={"Enter password"}
      />

      <Button type="submit">Create Account</Button>

      <p className="auth-link">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </form>
  );
};

export default RegisterForm;
