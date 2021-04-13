import React from 'react';
import './Button.css';

const button = props => {
    const content = props.btnType === "Toggler"
    ? (<div className={["Toggler", props.open ? "Open" : ''].join(' ')}>
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
    </div>)
    : props.children;


    return (
    <button className={["Button", props.btnType].join(' ')} onClick={props.clicked}>
        {content}
    </button>
    )
};

export default button;