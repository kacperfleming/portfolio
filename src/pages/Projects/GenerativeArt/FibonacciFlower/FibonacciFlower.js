import React, {useLayoutEffect, useReducer, useRef, useState} from 'react';

import Input from '../../../../components/UI/Input/Input';
import Button from '../../../../components/UI/Button/Button';

import {updateObj} from '../../../../usefulFunc/utility';

import classes from './FibonacciFlower.module.css';


const valRngStateReducer = (state, action) => {
    if(action.type === 'UPDATE_INPUT_VALUE') return updateObj(state, {
        [action.id]: {
            ...state[action.id],
            value: action.val
        }
    })
    else return state;
}

const FibonacciFlower = props => {
    const canv = useRef();

    const [animationToggler, setAnimationToggler] = useState(false);

    const [valRng, dispatchValRng] = useReducer(valRngStateReducer, {
        angle: {
            elementType: 'input',
            inputType: 'range',
            value: '0.5',
            min: '0.1',
            max: '10',
            step: '0.1'
        },
        space: {
            elementType: 'input',
            inputType: 'range',
            value: '0.5',
            min: '0.1',
            max: '10',
            step: '0.1'
        },
        color: {
            elementType: 'input',
            inputType: 'range',
            value: '260',
            min: '0',
            max: '360',
            step: '10'
        },
        radius: {
            elementType: 'input',
            inputType: 'range',
            value: '8',
            min: '1',
            max: '50',
            step: '1'
        }
    });

    const onInputChange = (event, id) => dispatchValRng({type: 'UPDATE_INPUT_VALUE', val: event.target.value, id: id});

    let initAngle = 2;
    let initSpace = 1;

    function draw(ctx, canvas, col, ang, spa, rad) {
        const x = canvas.width / 2 + Math.sin(initAngle) * initSpace;
        const y = canvas.height / 2 + Math.cos(initAngle) * initSpace;

        ctx.beginPath();
        ctx.fillStyle = `hsl(${col}, 50%, 50%)`;
        ctx.arc(x, y, rad, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
        initAngle += +ang;
        initSpace += +spa;

        return {x, y}
    }

    const onInit = () => {
        initSpace = 1;
        initAngle = 2;
        setAnimationToggler(prevState => !prevState);
    }

    const {color: {value: color}, angle: {value: angle}, space: {value: space}, radius: {value: radius}} = valRng;

    useLayoutEffect(() => {
        console.log(`animation toggler: ${animationToggler}`);
        const canvas = canv.current;
        const ctx = canvas.getContext('2d');

        let timeout;

        const resizeHandler = () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                canvas.height = canvas.getBoundingClientRect().height;
                canvas.width = canvas.getBoundingClientRect().width;
            }, 500);
        }

        window.addEventListener('resize', resizeHandler);

        if(animationToggler) {
            canvas.height = canvas.getBoundingClientRect().height;
            canvas.width = canvas.getBoundingClientRect().width;
        }

        let animationFrameId = 0;

        const animate = () => {

            const {x, y} = draw(ctx, canvas, color, angle, space, radius);
            if((y - radius < 0 || y + radius > canvas.getBoundingClientRect().height) && (x - radius < 0 || x + radius > canvas.getBoundingClientRect().width)) {
                setAnimationToggler(false);
                return;
            }

            animationFrameId = requestAnimationFrame(animate);
        }

        if(animationToggler) animate();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
            clearTimeout(timeout);
            window.removeEventListener('resize', resizeHandler);
        }

    }, [animationToggler, color, angle, space, radius]);

    const slidersArr = [];
    for(let slider in valRng) {
        slidersArr.push({
            id: slider,
            config: valRng[slider]
        });
    }

    const displayedSliders = slidersArr.map(
        slider =>
        <Input
            key={slider.id}
            elementType={slider.config.elementType}
            inputType={slider.config.inputType}
            label={slider.id}
            value={slider.config.value}
            disabled={animationToggler}
            min={slider.config.min}
            max={slider.config.max}
            step={slider.config.step}
            changed={(event) => onInputChange(event, slider.id)} />
    )

    return (
        <React.Fragment>
            <canvas className={classes.Canvas} ref={canv} />
            <div className={classes.RngValSliders}>
            {displayedSliders}
            <Button btnType="Success" clicked={onInit}>{animationToggler ? 'Stop!' : 'Try it!'}</Button>
            </div>
        </React.Fragment>
    )
}

export default FibonacciFlower;