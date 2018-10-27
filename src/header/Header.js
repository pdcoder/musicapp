import React from 'react';

import classes from './Header.css';
import Logo from '../UI/Logo/Logo';
import NavigationItems from '../UI/NavigationItems/NavigationItems';
import DrawerToggle from '../DrawerToggle/DrawerToggle';
import Search from '../UI/Search/Search';
const header = ( props ) => (
    <header className={classes.Header}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        
        <div className={classes.Logo}>
            <Logo />
        </div> 
        <Search />
        <nav className={classes.DesktopOnly}>
            <NavigationItems  />
        </nav>
    </header>
);

export default header;