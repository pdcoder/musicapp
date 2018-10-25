import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import Layout from './Layout';
import Header from './header/Header';
import './App.css';
import Aux from './Aux/Aux';
class App extends Component {
  render() {
    let routes = (
 
        <Route path="/" component={Layout} />
      
    );
    return (

      <Router>
     {routes}

      </Router>
    );
  }
}

export default App;
