import React, { Component } from 'react';
import { connect } from 'react-redux';

import OrangeRoomTile from './OrangeRoomTile';

import parlorRoomTile from '../../assets/images/RoomTiles/StartingRooms/Parlor.jpg';
import Aux from '../../hoc/Aux/Aux';

import * as actionTypes from '../../store/actions';

class ParlorRoomTile extends Component {
  render () {
    return (
      <Aux>
        <OrangeRoomTile
          roomTileImage={parlorRoomTile}
          roomTileImageAlt='parlor room tile'
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
    onTakeAction: () => dispatch({type: actionTypes.PARLOR})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParlorRoomTile);
