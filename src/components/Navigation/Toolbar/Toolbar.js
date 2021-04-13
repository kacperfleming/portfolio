import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Button from '../../UI/Button/Button';

import './Toolbar.css';

const toolbar = props => (
    <header className="Toolbar">
        <Button btnType="Toggler" clicked={props.toggleSideDrawer} open={props.togglerState}></Button>

        <nav className="DesktopOnly">
            <NavigationItems />
        </nav>
    </header>
)

export default toolbar;
