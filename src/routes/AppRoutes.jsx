import { createBrowserRouter } from "react-router-dom";
import ProtectedLayout from "./ProtectedLayout";
import PublicRoute from "./PublicRoutes";

import LandingPage from "../pages/LandingPage/LandingPage";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import FileUpload from "../pages/Dashboard/FileUpload";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  {
    element: <PublicRoute />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
    ],
  },
  {
    element: <ProtectedLayout />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/upload", element: <FileUpload /> },
    ],
  },
]);

export default router;
