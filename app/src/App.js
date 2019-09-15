import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import classes from './App.css';

import Layout from './hoc/Layout/Layout';
import GameSetup from './containers/GameSetup/GameSetup';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <Switch>
            {/* <Route path="/game" component={Game} */}
            <Route path="/" exact component={GameSetup} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
