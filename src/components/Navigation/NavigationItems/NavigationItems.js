import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import {connect} from 'react-redux';


import './NavigationItems.css';

const NavigationItems = props => (
    <ul className="NavigationItems">
        <NavigationItem link="/projects">Projects</NavigationItem>
        <NavigationItem link="/about-me">About Me</NavigationItem>
        <NavigationItem link="/contact">Contact</NavigationItem>
        {props.isAuthorized 
        ? <NavigationItem link="/logout">Logout</NavigationItem>
        : <NavigationItem link="/auth">Login</NavigationItem>}
    </ul>
);

const mapStateToProps = state => {
    return {
        isAuthorized: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(NavigationItems);
