import { ToastPosition, toast } from "react-toastify";

export const TOAST_INFO = (
  message: string,
  position?: ToastPosition | undefined,
  autoClose?: number | false | undefined,
  hideProgressBar?: boolean | undefined
) =>
  toast.info(message, {
    position: position ? position : toast.POSITION.TOP_RIGHT,
    autoClose: autoClose == false ? autoClose : 1500,
    rtl: false,
    hideProgressBar: hideProgressBar ? hideProgressBar : true,
  });

export const TOAST_ERROR = (
  message: string,
  position?: ToastPosition | undefined,
  autoClose: number | false | undefined = 1500,
  hideProgressBar?: boolean | undefined
) =>
  toast.error(message, {
    position: position ? position : toast.POSITION.TOP_RIGHT,
    autoClose,
    rtl: false,
    hideProgressBar: hideProgressBar ? hideProgressBar : true,
  });

export const TOAST_SUCCESS = (
  message: string,
  position?: ToastPosition | undefined,
  autoClose: number | false | undefined = 1500,
  hideProgressBar?: boolean | undefined
) =>
  toast.success(message, {
    position: position ? position : toast.POSITION.TOP_RIGHT,
    autoClose,
    rtl: false,
    hideProgressBar: hideProgressBar ? hideProgressBar : true,
  });

  export const TOAST_WARNING = (
    message: string,
    position?: ToastPosition | undefined,
    autoClose: number | false | undefined = 1500,
    hideProgressBar?: boolean | undefined
  ) =>
    toast.warning(message, {
      position: position ? position : toast.POSITION.TOP_RIGHT,
      autoClose,
      rtl: false,
      hideProgressBar: hideProgressBar ? hideProgressBar : true,
    });
