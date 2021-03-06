import { useReducer, useState } from "react";

import { updateObj } from "../../usefulFunc/utility";

import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";

import classes from "./use-playgroundSliders.module.css";

const valRngStateReducer = (state, action) => {
  if (action.type === "UPDATE_INPUT_VALUE")
    return updateObj(state, {
      [action.id]: {
        ...state[action.id],
        value: action.val,
      },
    });
  else return state;
};

const usePlaygroundSliders = (initialState, playgroundName, disableControls) => {
  const [valRng, dispatchValRng] = useReducer(valRngStateReducer, initialState);

  const [animationToggler, setAnimationToggler] = useState(false);
  
  const [stopped, setStopped] = useState(false);
  

  const onInputChange = (event, id) =>
    dispatchValRng({
      type: "UPDATE_INPUT_VALUE",
      val: event.target.value,
      id: id,
    });

    const onClickHandler = () => {
      if(animationToggler) setStopped(true);
      setAnimationToggler((prevState) => !prevState);
    }

  const slidersArr = [];
  for (let slider in valRng) {
    slidersArr.push({
      id: slider,
      config: valRng[slider],
    });
  }

  const rngSliders = slidersArr.map((slider) => (
    <Input
      key={slider.id}
      elementType={slider.config.elementType}
      inputType={slider.config.inputType}
      label={slider.id}
      value={slider.config.value}
      disabled={animationToggler && disableControls}
      min={slider.config.min}
      max={slider.config.max}
      step={slider.config.step}
      changed={(event) => onInputChange(event, slider.id)}
    />
  ));

  const playgroundUI = (
      <section className={classes.RngValSliders}>
        <h1 className={classes.PlaygroundName}>{playgroundName}</h1>
        {rngSliders}
        <Button
          btnType="Success"
          clicked={onClickHandler}
        >
          {animationToggler ? "Stop!" : "Try it!"}
        </Button>
      </section>
  );

  return {
    playgroundUI,
    valRng,
    animationToggler,
    setAnimationToggler,
    stopped,
    setStopped
  };
};

export default usePlaygroundSliders;
