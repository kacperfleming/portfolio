import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import './NavigationItems.css';

const NavigationItems = props => (
    <ul className="NavigationItems">
        <NavigationItem link="/projects">Projects</NavigationItem>
        <NavigationItem link="/about-me">About Me</NavigationItem>
        <NavigationItem link="/contact">Contact</NavigationItem>
        <NavigationItem link="/auth">Login</NavigationItem>
    </ul>
);

export default NavigationItems;
