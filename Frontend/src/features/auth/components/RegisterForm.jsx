import { useState } from "react";
import Button from "../../../shared/components/button/Button";
import Input from "../../../shared/ui/input/Input";
import "../style/registerForm.scss";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Loader from "../../../shared/components/loader/Loader";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { user, loading, handleRegister } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await handleRegister({ username, email, password });

    setUsername("");
    setEmail("");
    setPassword("");
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <Input
        type="text"
        label={"username"}
        placeholder={"Enter username"}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <Input
        type="email"
        label={"email"}
        placeholder={"Enter email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        type="password"
        label={"password"}
        placeholder={"Enter password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button type="submit">{loading ? <Loader /> : "Create Account"}</Button>

      <p className="auth-link">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </form>
  );
};

export default RegisterForm;
