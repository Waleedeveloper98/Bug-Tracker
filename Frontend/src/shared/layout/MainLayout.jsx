import "./mainLayout.scss";

import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />

      <div className="layout__main">
        <Navbar />

        <main className="layout__content">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
