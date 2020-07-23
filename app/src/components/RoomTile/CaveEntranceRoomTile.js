import React, { Component } from 'react';
import { connect } from 'react-redux';

import OrangeRoomTile from './OrangeRoomTile';

import caveEntrance from '../../assets/images/RoomTiles/StartingRooms/CaveEntrance.jpg';
import Aux from '../../hoc/Aux/Aux';

import * as actionTypes from '../../store/actions';

class CaveEntranceRoomTile extends Component {
  render () {
    return (
      <Aux>
        <OrangeRoomTile
          roomTileImage={caveEntrance}
          roomTileImageAlt='cave entrance room tile'
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
    onTakeAction: () => dispatch({type: actionTypes.CAVE_ENTRANCE})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CaveEntranceRoomTile);
