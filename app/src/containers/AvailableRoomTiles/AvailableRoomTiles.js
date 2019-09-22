import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './AvailableRoomTiles.css';
import Aux from '../../hoc/Aux/Aux';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import RoomTile from '../../components/RoomTile/RoomTile';
import grayRoomTileBack from '../../assets/images/RoomTiles/DarkGrayRoomTileBacks.jpg';

class AvailableRoomTiles extends Component {
  render () {
    return (
      <Aux>
        <div className={classes.AvailableRoomTiles}>
            <RoomTile roomTileImage={grayRoomTileBack} roomTileImageAlt='test' />
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