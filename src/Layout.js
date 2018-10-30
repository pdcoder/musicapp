import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Header from './header/Header';
import SideDrawer from './UI/SideDrawer/SideDrawer';
import Aux from './Aux/Aux';
import Music from './Music/Music';
import SearchResults from './SearchResults/SearchResults';

import classes from './Layout.css';
class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }
    render() {
       
      
      return (
<Aux>
                <Header
                    isAuth={this.props.isAuthenticated}
                    drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    isAuth={this.props.isAuthenticated}
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                     <Route path="/" exact component={Music} />
                     <Route path="/search" component={SearchResults} />

                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
                  );
    }
  }

  export default Layout;