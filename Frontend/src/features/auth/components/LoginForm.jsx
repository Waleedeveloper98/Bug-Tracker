import { useState } from "react";
import Button from "../../../shared/components/button/Button";
import Input from "../../../shared/ui/input/Input";
import "../style/loginForm.scss";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Loader from "../../../shared/components/loader/Loader";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { loading, handleLogin } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin({ email, password });

    setEmail("");
    setPassword("");
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <Input
        type="email"
        label={"email"}
        placeholder={"Enter your email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        type="password"
        label={"Password"}
        placeholder={"Enter password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button type="submit">{loading ? <Loader /> : "Login"}</Button>

      <p className="auth-link">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </form>
  );
};

export default LoginForm;
