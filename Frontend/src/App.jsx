import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./AppRoutes";
import "./global.scss"

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
