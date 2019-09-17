import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import classes from './App.css';

import Layout from './hoc/Layout/Layout';
import GameSetup from './containers/GameSetup/GameSetup';
import LandingView from './containers/LandingView/LandingView';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <Switch>
            <Route path="/gameSetup" exact component={GameSetup} />
            <Route path="/" component={LandingView} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
