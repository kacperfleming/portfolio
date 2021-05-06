import { useEffect, useLayoutEffect, useState } from "react";

import useCanvas from '../../../../hooks/use-canvas/use-canvas';
import usePlayground from "../../../../hooks/use-playground/use-playgroundSliders";

import classes from './Wave.module.css';



const Wave = props => {
    const [ready, setReady] = useState(false);

    const {canvasEl, ctx, size} = useCanvas(ready);

  const { playgroundUI, valRng, animationToggler, setAnimationToggler, stopped, setStopped} = usePlayground({
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
  });

  useEffect(() => {
    setReady(true);
  }, [])

    useLayoutEffect(() => {
        const wave = {
            y: size.height / 2,
            length: 0.01,
            amplitude: 100,
            frequency: 0.1,
            randomEvery: 100,
            counter: 0
        }

        let animationFrameId = null;

        let increment = wave.frequency;
        function animate() {
            ctx.beginPath();
            ctx.moveTo(0, size.height/2);
            ctx.strokeStyle = 'hsl(0, 50%, 50%)';


            for(let i = 0; i < iw; i++) {
                ctx.lineTo(i, wave.y + Math.sin(i * wave.length + increment) * wave.amplitude * Math.sin(increment));
            }

            ctx.stroke();

            increment += 0.02;
            ctx.fillRect(0,0,size.width,size.height);
            ctx.fillStyle = 'rgba(0,0,0,0.05';

            wave.counter ++;
            animationFrameId = requestAnimationFrame(animate);
        }
        animate();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        }
    }, []);
    return <canvas className={classes.Canvas} ref={canv} />
}

export default Wave;