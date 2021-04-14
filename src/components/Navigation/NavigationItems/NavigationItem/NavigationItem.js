import React from 'react';
import {NavLink} from 'react-router-dom';
import StringVariation from '../../../UI/StringVariation/StringVariation';

import classes from './NavigationItem.module.css';

const NavigationItem = props => (
    <li className={classes.NavigationItem}>
        <NavLink
        to={props.link}
        activeClassName={classes.Active}>
            <StringVariation>{props.children}</StringVariation>
        </NavLink>
    </li>
);

export default NavigationItem;