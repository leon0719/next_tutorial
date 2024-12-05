import { ReactNode } from "react";
import classes from "./Modal.module.css";

interface ModalProps {
  children: ReactNode;
}

function Modal({ children }: ModalProps) {
  return (
    <>
      <div className={classes.backdrop} />
      <dialog open={true} className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
