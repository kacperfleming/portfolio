import { useEffect, useLayoutEffect, useState } from "react";

import useCanvas from '../../../../hooks/use-canvas/use-canvas';
import usePlayground from "../../../../hooks/use-playground/use-playgroundSliders";

import gClasses from '../../../../global.module.css';

const Wave = () => {
    const [ready, setReady] = useState(false);

    const {canvasEl, ctx, size} = useCanvas(ready);

  const { playgroundUI, valRng, animationToggler} = usePlayground({
    length: {
      elementType: "input",
      inputType: "range",
      value: "0.01",
      min: "0.0001",
      max: "0.2",
      step: "0.001",
    },
    amplitude: {
      elementType: "input",
      inputType: "range",
      value: "100",
      min: "50",
      max: "150",
      step: "1",
    },
    frequency: {
      elementType: "input",
      inputType: "range",
      value: "0.1",
      min: "0.01",
      max: "0.2",
      step: "0.01",
    },
    color: {
      elementType: "input",
      inputType: "range",
      value: "0",
      min: "0",
      max: "360",
      step: "10",
    },
  }, "Wave", false);

  useEffect(() => {
    setReady(true);
  }, []);

  let initFrequency = 0.1;

  let {length: {value: length}, amplitude: {value: amplitude}, frequency: {value: frequency}, color: {value: color}} = valRng
  
  const draw = () => {
    ctx.beginPath();
    ctx.moveTo(0, size.height/2);
    ctx.strokeStyle = `hsl(${color}, 50%, 50%)`;


    for(let i = 0; i < size.width; i++) {
        ctx.lineTo(i, size.height/2 + Math.sin(i * 0.0025/length + initFrequency) * amplitude * Math.sin(initFrequency));
    }

    ctx.stroke();

    initFrequency += +frequency;
    ctx.fillRect(0,0,size.width,size.height);
    ctx.fillStyle = 'rgba(0,0,0,0.05';
  }

    useLayoutEffect(() => {

        let animationFrameId = null;

        function animate() {
            draw();
            animationFrameId = requestAnimationFrame(animate);
        }
        if(animationToggler) animate();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        }
    }, [animationToggler, valRng]);
    return (
    <section className={gClasses.Playground}>
      {playgroundUI}
      {canvasEl}
    </section>
    )
      
    
}

export default Wave;