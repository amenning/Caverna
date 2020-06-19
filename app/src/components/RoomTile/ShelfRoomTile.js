import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './RoomTile.css';
import RoomTile from './RoomTile';

import shelfRoomTile from '../../assets/images/RoomTiles/StartingRooms/Shelf.jpg';
import Aux from '../../hoc/Aux/Aux';

import * as actionTypes from '../../store/actions';

class ShelfRoomTile extends Component {
  render () {
    return (
      <Aux>
        <RoomTile
          roomTileImage={shelfRoomTile}
          roomTileImageAlt='shelf room tile'
          onClick={this.props.onTakeAction}
        />
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    resources: state.resources
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onTakeAction: () => dispatch({type: actionTypes.SHELF})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShelfRoomTile);
