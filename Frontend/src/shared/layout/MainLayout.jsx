import "./mainLayout.scss";

import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../features/auth/hooks/useAuth";

const MainLayout = () => {
  const { user, loading } = useAuth();
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="layout">
      <Sidebar />

      <div className="layout__main">
        <Navbar />

        <main className="layout__content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
