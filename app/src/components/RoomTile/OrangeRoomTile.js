import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './RoomTile.css';
import RoomTile from './RoomTile';
import Aux from '../../hoc/Aux/Aux';

class OrangeRoomTile extends RoomTile {
  activateRoomTile = () => {
    if (this.props.orangeRoomActions > 0) {
      this.props.onClick();
    }
  }

  render () {
    let classNames = '';
    if (this.props.orangeRoomActions > 0) {
      classNames = classes.ActiveOption;
    }

    return (
      <Aux>
        <div className={classNames} onClick={this.activateRoomTile}>
          <RoomTile
            roomTileImage={this.props.roomTileImage}
            roomTileImageAlt={this.props.roomTileImageAlt}
          />
        </div>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    orangeRoomActions: state.orangeRoomActions
  };
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrangeRoomTile);
