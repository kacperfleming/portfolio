import React, {useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom';
import Canvas from '../../components/UI/Canvas/Canvas';
import './Home.css';

const Home = () => {

    const [canvTxt, setCanvTxt] = useState('');

    const iw = window.innerWidth;

    let content = <Canvas dyspTxt={canvTxt} />;
    if(iw < 900) content = <Redirect to="/about-me" />;

    useEffect(() => {
        const timer = setTimeout(() =>
        setCanvTxt('Hey!'), 3000);
        const timer2 = setTimeout(() =>
        setCanvTxt('I\'m Kacper'), 6000);
        const timer3 = setTimeout(() =>
        setCanvTxt('Coding\'s my passion'), 9000);
        const timer4 = setTimeout(() =>
        setCanvTxt('</>'), 12000);

        return () => {
            clearTimeout(timer);
            clearTimeout(timer2);
            clearTimeout(timer3);
        }
    }, [])

    return(
        <React.Fragment>
            {content}
        </React.Fragment>
    );
}

export default Home;