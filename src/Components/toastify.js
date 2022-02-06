import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toasts = (msg, type) => {
  toast[type](msg, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export default toasts;
