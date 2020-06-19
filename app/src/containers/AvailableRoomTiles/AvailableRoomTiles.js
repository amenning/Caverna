import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './AvailableRoomTiles.css';
import availableRoomTilesBackground from '../../assets/images/AvailableTileBoard/AvailableTileBoard.png';
import Aux from '../../hoc/Aux/Aux';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import FoodCornerRoomTile from '../../components/RoomTile/FoodCornerRoomTile';
import GrindstoneRoomTile from '../../components/RoomTile/GrindstoneRoomTile';
import ParlorRoomTile from '../../components/RoomTile/ParlorRoomTile';

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
