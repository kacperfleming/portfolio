import React, {useState} from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import classes from './Layout.module.css';

function Layout(props) {
    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const sideDrawerToggleHandler = () => setShowSideDrawer(prevState => !prevState);

    const sideDrawerCloseHandler = () => setShowSideDrawer(false);


    return (
    <React.Fragment>
        <Toolbar
            toggleSideDrawer={sideDrawerToggleHandler} togglerState={showSideDrawer} />
        <SideDrawer close={sideDrawerCloseHandler} show={showSideDrawer} />
        <main className={classes.Content}>
        {props.children}
        </main>
    </React.Fragment>
    )
};

export default Layout;