import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import './SideDrawer.css';

const sideDrawer = props => {
    let classes = ["SideDrawer", "Close"];
    if(props.show) classes = ["SideDrawer", "Open"];

    return (
        <React.Fragment>
            <Backdrop show={props.show} clicked={props.close} />
            <div onClick={props.close} className={classes.join(' ')}>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </React.Fragment>
    )
}

export default sideDrawer;
