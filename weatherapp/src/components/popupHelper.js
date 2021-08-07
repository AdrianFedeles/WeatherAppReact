import { toast } from 'react-toastify';

const showPopup = (msg, type, time = 3000) => {
    switch (type) {
        case 'WARNING':
            toast.warn(msg,{position: "top-right", autoClose: time});
            break;
        case 'SUCCES':
            toast.success(msg,{position: "top-right", autoClose: time});
            break;
        case 'ERROR':
            toast.error(msg,{position: "top-right", autoClose: time});
            break;
    }
} 

export default showPopup;