import { SnackbarProvider, useSnackbar } from "notistack";
import { createContext, useContext } from "react";

const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const showToast = ({
    message = "This is a default message",
    variant = "info",
    autoHideDuration = 4000,
    isDismissable = true,
  }) => {
    enqueueSnackbar(message, {
      variant,
      autoHideDuration,
      action: isDismissable
        ? (key) => (
            <button
              onClick={() => closeSnackbar(key)}
              style={{
                border: "none",
                background: "transparent",
                cursor: "pointer",
                color: "white",
              }}
            >
              ✖
            </button>
          )
        : null,
    });
  };

  return <ToastContext.Provider value={showToast}>{children}</ToastContext.Provider>;
};

export const useToast = () => {
  return useContext(ToastContext);
};
