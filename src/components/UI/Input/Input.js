import React from "react";

import classes from "./Input.module.css";

function Input(props) {
  let inputEl = null;
  const inputClasses = [classes.Input];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push("Invalid");
  }

  switch (props.inputType) {
    case "input":
      inputEl = <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          onChange={props.changed}
          value={props.value} />;
      break;

    case "textarea":
      inputEl = <textarea
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          onChange={props.changed}
          value={props.value} />;
  }

  return (
    <div className={classes.InputContainer}>
      <label className={classes.Label}>
        {props.label}
      </label>
      {inputEl}
    </div>
  );
};

export default Input;
