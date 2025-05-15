import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = () => {
  const user = useSelector((state) => state.user.user);

  return user ? <Navigate to="/dashboard" replace /> : <Outlet />;
};

export default PublicRoute;
