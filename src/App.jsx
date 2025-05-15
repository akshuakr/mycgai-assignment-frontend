import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser, logout } from "./store/userSlice";
import { RouterProvider } from "react-router-dom";
import axiosInstance from "./services/axiosInstance/mainInstance";
import router from "./routes/AppRoutes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");

      if (token) {
        try {
          const response = await axiosInstance.get("/user/user-details");
          dispatch(setUser({ user: response.data.data }));
        } catch (error) {
          console.error("Session Restore Error:", error.response?.data || error.message);
          dispatch(logout());
        }
      } else {
        dispatch(logout());
      }
    };

    checkAuth();

    const handleStorageChange = (event) => {
      if (event.key === "token" && !event.newValue) {
        dispatch(logout());
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
