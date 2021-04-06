import React, {useState} from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import './Layout.css';

const Layout = props => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const sideDrawerToggleHandler = () => {
        setShowSideDrawer(prevState => !prevState);
    }
    return (
    <React.Fragment>
        <Toolbar
            toggleSideDrawer={sideDrawerToggleHandler} />
        <SideDrawer show={showSideDrawer} />
        <main className="Content">
        {props.children}
        </main>
    </React.Fragment>
    )
};

export default Layout;