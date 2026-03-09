import { NavLink } from "react-router-dom";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        <NavLink
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
          to={"/"}
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
          to={"/my-bugs"}
        >
          My Bugs
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
          to={"/create"}
        >
          Create Bug
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
          to={"/stats"}
        >
          Stats
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
