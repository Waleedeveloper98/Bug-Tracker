import { createBrowserRouter } from "react-router-dom";
import RegisterPage from "./features/auth/pages/RegisterPage";
import LoginPage from "./features/auth/pages/LoginPage";
import DashboardPage from "./features/bugs/pages/DashboardPage";
import Protected from "./Protected";
import MainLayout from "./shared/layout/MainLayout";
import MyBugsPage from "./features/bugs/pages/MyBugsPage";
import BugDetailsPage from "./features/bugs/pages/BugDetailsPage";
import CreateBugPage from "./features/bugs/pages/CreateBugPage";
import StatsPage from "./features/stats/pages/StatsPage";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <Protected>
            <DashboardPage />
          </Protected>
        ),
      },
      {
        path: "/my-bugs",
        element: (
          <Protected>
            <MyBugsPage />
          </Protected>
        ),
      },
      {
        path: "/create",
        element: (
          <Protected>
            <CreateBugPage />
          </Protected>
        ),
      },
      {
        path: "/stats",
        element: (
          <Protected>
            <StatsPage />
          </Protected>
        ),
      },
      {
        path: "/:bugId/details",
        element: (
          <Protected>
            <BugDetailsPage />
          </Protected>
        ),
      },
      {
        path: "/bugs/edit/:bugId",
        element: (
          <Protected>
            <CreateBugPage />
          </Protected>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);
