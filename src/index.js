import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Projects from "./pages/Projects";
import projectsData from "./components/Projects.json";
import Resume from "./pages/Resume";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "projects",
    element: <Projects projects={projectsData}/>,
  },
  {
    path: "resume",
    element: <Resume />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
