import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './RoomTile.css';
import RoomTile from './RoomTile';

import tunnelRoomTile from '../../assets/images/RoomTiles/StartingRooms/Tunnel.jpg';
import Aux from '../../hoc/Aux/Aux';

import * as actionTypes from '../../store/actions';

class TunnelRoomTile extends Component {
  render () {
    return (
      <Aux>
        <RoomTile
          roomTileImage={tunnelRoomTile}
          roomTileImageAlt='tunnel room tile'
          onClick={this.props.onTakeAction}
          activeOption={this.props.activeOption}
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
    onTakeAction: () => dispatch({type: actionTypes.TUNNEL})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TunnelRoomTile);
