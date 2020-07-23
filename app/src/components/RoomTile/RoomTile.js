import React, { Component } from 'react';

import classes from './RoomTile.css';
import Aux from '../../hoc/Aux/Aux';

class RoomTile extends Component {
  render () {
    return (
      <Aux>
        <div className={classes.RoomTile}>
          <img src={this.props.roomTileImage} alt={this.props.roomTileImageAlt} />
        </div>
      </Aux>
    );
  }
}

export default RoomTile;
