import { useRef, useReducer, useEffect } from "react";

import { updateObj } from "../../usefulFunc/utility";

import classes from "./use-canvas.module.css";

const INIT_STATE = {
  canvas: null,
  ctx: null,
  size: {
    height: null,
    width: null,
  },
};

const canvasReducer = (state, action) => {
  switch (action.type) {
    case "INIT_CANVAS":
      return updateObj(state, {
        canvas: action.value,
      });

    case "INIT_CTX":
      return updateObj(state, {
        ctx: action.value,
      });

    case "SET_SIZE":
      return updateObj(state, {
        size: {
          height: action.height,
          width: action.width,
        },
      });

    default:
      return state;
  }
};

const useCanvas = (ready) => {
  const canvasRef = useRef();

  const [canvState, dispatchCanvas] = useReducer(canvasReducer, INIT_STATE);

  useEffect(() => {
    if (!ready) return;
    dispatchCanvas({ type: "INIT_CANVAS", value: canvasRef.current });
  }, [ready]);

  useEffect(() => {
    if (!canvState.canvas) return;
    dispatchCanvas({ type: "INIT_CTX", value: canvState.canvas.getContext("2d")});
  }, [canvState.canvas])

  const {canvas} = canvState;

  useEffect(() => {
    if(!canvas) return
    let timeout;

    const resizeHandler = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
          console.log('resize');
        dispatchCanvas({
          type: "SET_SIZE",
          height: canvas.getBoundingClientRect().height,
          width: canvas.getBoundingClientRect().width,
        });
        canvas.height = canvas.getBoundingClientRect().height;
        canvas.width = canvas.getBoundingClientRect().width;
      }, 500);
    };

    resizeHandler();

    window.addEventListener("resize", resizeHandler);

    // if (animationToggler) {
    //     dispatchCanvas({
    //         type: "SET_SIZE",
    //         height: canvas.getBoundingClientRect().height,
    //         width: canvas.getBoundingClientRect().width,
    //       });
    //   canvas.height = canvas.getBoundingClientRect().height;
    //   canvas.width = canvas.getBoundingClientRect().width;
    // }

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", resizeHandler);
    };
  }, [canvas]);


  const canvasEl = <canvas ref={canvasRef} className={classes.Canvas} />;

  return {
      canvasEl,
      ...canvState
  };
};

export default useCanvas;
