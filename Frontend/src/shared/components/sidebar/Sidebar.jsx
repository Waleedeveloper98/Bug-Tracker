import "./sidebar.scss";

const Sidebar = () => {
  return (
    <aside className="sidebar">

      <nav className="sidebar__nav">

        <a href="#">Dashboard</a>
        <a href="#">My Bugs</a>
        <a href="#">Create Bug</a>
        <a href="#">Stats</a>

      </nav>

    </aside>
  );
};

export default Sidebar;