import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import classes from './App.css';

import Layout from './hoc/Layout/Layout';
import GameSetup from './containers/GameSetup/GameSetup';
import Game from './containers/Game/Game';
import LandingView from './containers/LandingView/LandingView';

class App extends Component {
  render () {
    return (
      <HashRouter>
        <div className={classes.App}>
          <Layout>
            <Switch>
              <Route path="/GameSetup" exact component={GameSetup} />
              <Route path="/Game" exact component={Game} />
              <Route path="/" component={LandingView} />
            </Switch>
          </Layout>
        </div>
      </HashRouter>
    );
  }
}

export default App;
