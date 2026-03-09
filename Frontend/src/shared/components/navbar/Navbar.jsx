import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../features/auth/hooks/useAuth";
import Button from "../button/Button";
import "./navbar.scss";

const Navbar = () => {
  const { handleLogout } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async () => {
    await handleLogout();
    navigate("/login");
  };
  return (
    <header className="navbar">
      <div className="navbar__logo">BugTracker</div>

      <div className="navbar__actions">
        <Button handleSubmit={handleSubmit} type="button">logout</Button>
      </div>
    </header>
  );
};

export default Navbar;
