import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SnackbarProvider } from "notistack";
import { CssBaseline } from "@mui/material";
import { ToastProvider } from "./utils/ToastProvider";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App.jsx";
import "./styles/index.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
        <ToastProvider>
          <CssBaseline />
          <App />
        </ToastProvider>
      </SnackbarProvider>
    </Provider>
  </StrictMode>
);
