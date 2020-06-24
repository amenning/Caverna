import React, { Component } from 'react';

import classes from './RoomTile.css';
import Aux from '../../hoc/Aux/Aux';

class RoomTile extends Component {
  render () {
    let classNames = classes.RoomTile;
    if (this.props.activeOption) {
      classNames += ' ' + classes.ActiveOption;
    }

    return (
      <Aux>
        <div className={classNames} onClick={this.props.onClick}>
          <img src={this.props.roomTileImage} alt={this.props.roomTileImageAlt} />
        </div>
      </Aux>
    );
  }
}

export default RoomTile;
