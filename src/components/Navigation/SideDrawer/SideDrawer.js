import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import classes from './SideDrawer.module.css';

function SideDrawer(props) {
    let styles = [classes.SideDrawer, classes.Close];
    if(props.show) styles = [classes.SideDrawer, classes.Open];

    return (
        <React.Fragment>
            <Backdrop show={props.show} clicked={props.close} />
            <div onClick={props.close} className={styles.join(' ')}>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </React.Fragment>
    )
}

export default SideDrawer;
