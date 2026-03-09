import Button from "../button/Button";
import "./navbar.scss";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__logo">BugTracker</div>

      <div className="navbar__actions">
        <Button type="button">logout</Button>
      </div>
    </header>
  );
};

export default Navbar;
