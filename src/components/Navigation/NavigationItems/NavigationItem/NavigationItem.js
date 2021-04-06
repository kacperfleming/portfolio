import React from 'react';
import {NavLink} from 'react-router-dom';
import StringVariation from '../../../UI/StringVariation/StringVariation';

import './NavigationItem.css';

const NavigationItem = props => (
    <li className="NavigationItem">
        <NavLink
        to={props.link}
        activeClassName="Active">
            <StringVariation>{props.children}</StringVariation>
        </NavLink>
    </li>
);

export default NavigationItem;