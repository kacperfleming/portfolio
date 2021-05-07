import { useEffect, useLayoutEffect, useState } from "react";

import useCanvas from '../../../../hooks/use-canvas/use-canvas';
import usePlaygroundSliders from "../../../../hooks/use-playground/use-playgroundSliders";

import gClasses from '../../../../global.module.css';

const FibonacciFlower = () => {
    const [ready, setReady] = useState(false);

    const {canvasEl, ctx, size} = useCanvas(ready);

  const { playgroundUI, valRng, animationToggler, setAnimationToggler, stopped, setStopped} = usePlaygroundSliders({
    angle: {
      elementType: "input",
      inputType: "range",
      value: "0.5",
      min: "0.1",
      max: "10",
      step: "0.1",
    },
    space: {
      elementType: "input",
      inputType: "range",
      value: "0.5",
      min: "0.1",
      max: "10",
      step: "0.1",
    },
    color: {
      elementType: "input",
      inputType: "range",
      value: "260",
      min: "0",
      max: "360",
      step: "10",
    },
    radius: {
      elementType: "input",
      inputType: "range",
      value: "8",
      min: "1",
      max: "50",
      step: "1",
    },
  }, "Fibonacci Flower", true);



  let initAngle = 2;
  let initSpace = 1;

  const {
    color: { value: color },
    angle: { value: angle },
    space: { value: space },
    radius: { value: radius },
  } = valRng;

  useEffect(() => {
    setReady(true);
  }, []);

  function draw(col, ang, spa, rad) {
    const x = size.width / 2 + Math.sin(initAngle) * initSpace;
    const y = size.height / 2 + Math.cos(initAngle) * initSpace;

    ctx.beginPath();
    ctx.fillStyle = `hsl(${col}, 50%, 50%)`;
    ctx.arc(x, y, rad, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
    initAngle += +ang;
    initSpace += +spa;

    return { x, y };
  }

  const onResetAnimationHandler = () => {
    setAnimationToggler(false);
    ctx.clearRect(0,0,size.width, size.height);
    initAngle = 2;
    initSpace = 1;
  }

  useLayoutEffect(() => {
    if(!ctx) return;
    let animationFrameId = 0;

    const animate = () => {

      const { x, y } = draw(color, angle, space, radius);
      if (
        (y - radius < 0 ||
          y + radius > size.height) &&
        (x - radius < 0 || x + radius > size.width)
      ) {
        onResetAnimationHandler();
        return;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    if(stopped) {
        setStopped(false);
        onResetAnimationHandler();
        return;
      }

    if (animationToggler) animate();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [animationToggler, color, angle, space, radius]);

  return (
  <section className={gClasses.Playground}>
      {playgroundUI}
      {canvasEl}
  </section>
  )
      
  
};

export default FibonacciFlower;
