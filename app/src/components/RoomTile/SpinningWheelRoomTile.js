import React, { Component } from 'react';
import { connect } from 'react-redux';

import OrangeRoomTile from './OrangeRoomTile';

import spinningWheelRoomTile from '../../assets/images/RoomTiles/StartingRooms/SpinningWheel.jpg';
import Aux from '../../hoc/Aux/Aux';

import * as actionTypes from '../../store/actions';

class SpinningWheelRoomTile extends Component {
  render () {
    return (
      <Aux>
        <OrangeRoomTile
          roomTileImage={spinningWheelRoomTile}
          roomTileImageAlt='spinning wheel room tile'
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
    onTakeAction: () => dispatch({type: actionTypes.SPINNING_WHEEL})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpinningWheelRoomTile);
