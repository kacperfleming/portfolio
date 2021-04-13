import React from "react";

import "./Input.css";

const input = (props) => {
  let inputEl = null;
  const inputClasses = ["Input"];

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
    <div className="InputContainer">
      <label className="Label">
        {props.label}
      </label>
      {inputEl}
    </div>
  );
};

export default input;
