
import { toast } from 'react-toastify';

export const notify = (message, type) => {
    if (type === "failed") {
        toast.error(message, {
            position: "top-right",
            autoClose: 4990,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    } else {
        message = toast.success(message, {
            position: "top-right",
            autoClose: 4990,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
}
