import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './AvailableRoomTiles.css';
import availableRoomTilesBackground from '../../assets/images/AvailableTileBoard/AvailableTileBoard.png';
import Aux from '../../hoc/Aux/Aux';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import FoodCornerRoomTile from '../../components/RoomTile/FoodCornerRoomTile';
import GrindstoneRoomTile from '../../components/RoomTile/GrindstoneRoomTile';
import ParlorRoomTile from '../../components/RoomTile/ParlorRoomTile';
import ShelfRoomTile from '../../components/RoomTile/ShelfRoomTile';
import SpinningWheelRoomTile from '../../components/RoomTile/SpinningWheelRoomTile';
import TunnelRoomTile from '../../components/RoomTile/TunnelRoomTile';

class AvailableRoomTiles extends Component {
  render () {
    return (
      <Aux>
        <div className={classes.AvailableRoomTiles}>
          <div>
              <img src={availableRoomTilesBackground} alt="Available Tiles Background" className={classes.AvailableRoomTilesBackgroundResponsiveImage} />
          </div>
          <div className={classes.RoomTileOne}>
            <FoodCornerRoomTile />
          </div>
          <div className={classes.RoomTileTwo}>
            <GrindstoneRoomTile />
          </div>
          <div className={classes.RoomTileThree}>
            <ParlorRoomTile />
          </div>
          <div className={classes.RoomTileFour}>
            <ShelfRoomTile />
          </div>
          <div className={classes.RoomTileFive}>
            <SpinningWheelRoomTile />
          </div>
          <div className={classes.RoomTileSix}>
            <TunnelRoomTile />
          </div>
        </div>
      </Aux>
    );
  };
}

const mapStateToProps = state => {
  return {
  };
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(AvailableRoomTiles));
