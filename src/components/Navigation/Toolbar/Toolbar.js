import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Button from '../../UI/Button/Button';

import classes from './Toolbar.module.css';

const Toolbar = props => (
    <header className={classes.Toolbar}>
        <Button btnType="Toggler" clicked={props.toggleSideDrawer} open={props.togglerState}></Button>

        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
)

export default Toolbar;
