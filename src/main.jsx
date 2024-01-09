import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { EntriesListPage } from "./pages/EntriesListPage.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";
import { RegisterPage } from "./pages/REgisterPage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <EntriesListPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
