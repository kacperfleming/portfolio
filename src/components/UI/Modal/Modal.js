import React from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const ModalComp = (props) =>
  props.show
  ? <div className={classes.Modal}>{props.children}</div>
  : null;

const Modal = (props) =>
  ReactDOM.createPortal(
    <ModalComp {...props} />,
    document.getElementById("modal-root")
  );

export default Modal;
