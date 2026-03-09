import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import AuthProvider from "./features/auth/AuthProvider.jsx";
import BugProvider from "./features/bugs/BugProvider.jsx";
import StatProvider from "./features/stats/StatProvider.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BugProvider>
      <StatProvider>
        <App />
      </StatProvider>
    </BugProvider>
  </AuthProvider>,
);
