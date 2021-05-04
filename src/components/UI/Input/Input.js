import classes from "./Input.module.css";

function Input(props) {
  let inputEl = null;
  const inputClasses = [classes.Input];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
  }

  switch (props.elementType) {
    case "input":
      inputEl = <input
          className={inputClasses.join(" ")}
          type={props.inputType}
          onChange={props.changed}
          value={props.value}
          disabled={props.disabled}
          min={props.min}
          max={props.max}
          step={props.step} />;
      break;

    case "textarea":
      inputEl = <textarea
          className={inputClasses.join(" ")}
          type={props.inputType}
          onChange={props.changed}
          value={props.value} />;
      break;
    
    default: return false
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
