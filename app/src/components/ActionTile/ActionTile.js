import React, { Component } from 'react';

import classes from './ActionTile.css';
import Aux from '../../hoc/Aux/Aux';

class ActionTile extends Component {
  render () {
    return (
      <Aux>
        <div className={classes.ActionTile}>
            <img src={this.props.actionTileImage} alt={this.props.actionTileImageAlt} />
        </div>
      </Aux>
    );
  }
}

export default ActionTile;
