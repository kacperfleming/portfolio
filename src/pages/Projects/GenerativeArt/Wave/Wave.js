import {useRef, useLayoutEffect} from 'react';

import classes from './Wave.module.css';

let iw;
let ih;


const Wave = props => {
    const canv = useRef();

    useLayoutEffect(() => {
        const canvas = canv.current;
        const ctx = canvas.getContext('2d');

        const resizeHandler = () => {
            iw = canvas.getBoundingClientRect().width;
            ih = canvas.getBoundingClientRect().height;

            canvas.width = iw;
            canvas.height = ih;
        }
        resizeHandler();

        const wave = {
            y: canvas.height / 2,
            length: 0.01,
            amplitude: 100,
            frequency: 0.1,
            randomEvery: 100,
            counter: 0
        }

        window.addEventListener('resize', resizeHandler);

        let animationFrameId;

        let increment = wave.frequency;
        function animate() {
            ctx.beginPath();
            ctx.moveTo(0, canvas.height/2);
            ctx.strokeStyle = 'hsl(0, 50%, 50%)';


            for(let i = 0; i < iw; i++) {
                ctx.lineTo(i, wave.y + Math.sin(i * wave.length + increment) * wave.amplitude * Math.sin(increment));
            }

            ctx.stroke();

            increment += 0.02;
            ctx.fillRect(0,0,iw,ih);
            ctx.fillStyle = 'rgba(0,0,0,0.05';

            wave.counter ++;
            animationFrameId = requestAnimationFrame(animate);
        }
        animate();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeHandler);
        }
    }, []);
    return <canvas className={classes.Canvas} ref={canv} />
}

export default Wave;