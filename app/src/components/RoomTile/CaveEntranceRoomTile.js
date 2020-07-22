import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './RoomTile.css';
import RoomTile from './RoomTile';

import caveEntrance from '../../assets/images/RoomTiles/StartingRooms/CaveEntrance.jpg';
import Aux from '../../hoc/Aux/Aux';

import * as actionTypes from '../../store/actions';

class CaveEntranceRoomTile extends Component {
  render () {
    return (
      <Aux>
        <RoomTile
          roomTileImage={caveEntrance}
          roomTileImageAlt='cave entrance room tile'
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
    onTakeAction: () => dispatch({type: actionTypes.CAVE_ENTRANCE})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CaveEntranceRoomTile);
