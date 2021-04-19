import React from "react";
import ReactDOM from "react-dom";

import classes from "./Backdrop.module.css";

const BackdropComp = (props) =>
  props.show ? (
    <div className={classes.Backdrop} onClick={props.clicked}></div>
  ) : null;

const Backdrop = (props) =>
  ReactDOM.createPortal(
    <BackdropComp {...props} />,
    document.getElementById("backdrop-root")
  );

export default Backdrop;
