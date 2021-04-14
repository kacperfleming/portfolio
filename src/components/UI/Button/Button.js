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
        <span className="Button--Content">{content}</span>
    </button>
    )
};

export default button;