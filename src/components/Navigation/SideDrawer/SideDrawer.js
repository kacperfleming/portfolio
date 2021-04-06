import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';

const sideDrawer = props => {
    let classes = ["SideDrawer", "Close"];
    if(props.show) classes = ["SideDrawer", "Open"];

    return (
        <React.Fragment>
            <div className={classes.join(' ')}>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </React.Fragment>
    )
}

export default sideDrawer;
