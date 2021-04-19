import React, {useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom';
import Canvas from '../../components/UI/Canvas/CanvasFluctuatingTxtDisp/CanvasFluctuatingTxtDisp';
import classes from './Home.module.css';

let timeout;

function wait(seconds) {
    return new Promise(resolve => {
        timeout = setTimeout(resolve, seconds * 1000)
    })
}

function Home(props) {

    const [canvTxt, setCanvTxt] = useState('');

    const iw = window.innerWidth;

    let content = <Canvas dyspTxt={canvTxt} />;
    if(iw < 900) content = <Redirect to="/about-me" />;

    useEffect(() => {
        wait(1)
        .then(() => {
            setCanvTxt('Hey!');
            return wait(3)
        })
        .then(() => {
            setCanvTxt('I\'m Kacper');
            return wait(3);
        })
        .then(() => {
            setCanvTxt('Coding\'s my passion');
            return wait(3);
        })
        .then(() => {
            setCanvTxt('</>');
            return wait(3);
        })

        return () => clearTimeout(timeout);

    }, [])

    return content;

}

export default Home;