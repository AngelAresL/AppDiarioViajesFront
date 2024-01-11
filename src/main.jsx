import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { EntriesListPage } from "./pages/EntriesListPage.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";
import { RegisterPage } from "./pages/REgisterPage.jsx";
import { TokenProvider } from "./TokenProvider.jsx";
import { NewEntryPage } from "./pages/NewEntryPage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <EntriesListPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/entry/new", element: <NewEntryPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TokenProvider>
      <RouterProvider router={router} />
    </TokenProvider>
  </React.StrictMode>
);
