import React, { Component } from 'react';

import classes from './CaveBoard.css';
import Aux from '../../hoc/Aux/Aux';
import caveBoard from '../../assets/images/CaveBoard/CaveBoard.jpg';
import RoomTile from '../../components/RoomTile/RoomTile';
import grayRoomTileBack from '../../assets/images/RoomTiles/DarkGrayRoomTileBacks.jpg';
import CaveEntranceRoomTile from '../../components/RoomTile/CaveEntranceRoomTile';

import ResourceTrack from '../ResourceTrack/ResourceTrack';

/**
 * The cave board room tile placement numbers are as follows:
 * 1 2
 * 3 4
 * 5 6
 * 7 8
 * 9 10 11
 */
class CaveBoard extends Component {
  render () {
    return (
      <Aux>
        <div className={classes.CaveBoard}>
          <div>
            <img src={caveBoard} alt="Player Cave Board" className={classes.CaveBoardBackgroundResponsiveImage} />
          </div>
          <div className={classes.RoomTileOne}>
            <RoomTile roomTileImage={grayRoomTileBack} roomTileImageAlt='test' activeOption={false} />
          </div>
          <div className={classes.RoomTileTwo}>
            <RoomTile roomTileImage={grayRoomTileBack} roomTileImageAlt='test' />
          </div>
          <div className={classes.RoomTileThree}>
            <RoomTile roomTileImage={grayRoomTileBack} roomTileImageAlt='test' />
          </div>
          <div className={classes.RoomTileFour}>
            <RoomTile roomTileImage={grayRoomTileBack} roomTileImageAlt='test' />
          </div>
          <div className={classes.RoomTileFive}>
            {/* Starts Empty */}
          </div>
          <div className={classes.RoomTileSix}>
            <RoomTile roomTileImage={grayRoomTileBack} roomTileImageAlt='test' />
          </div>
          <div className={classes.RoomTileSeven}>
            <CaveEntranceRoomTile activeOption={true} />
          </div>
          <div className={classes.RoomTileEight}>
            <RoomTile roomTileImage={grayRoomTileBack} roomTileImageAlt='test' />
          </div>
          <div className={classes.RoomTileNine}>
            <RoomTile roomTileImage={grayRoomTileBack} roomTileImageAlt='test' />
          </div>
          <div className={classes.RoomTileTen}>
            <RoomTile roomTileImage={grayRoomTileBack} roomTileImageAlt='test' />
          </div>
          <div className={classes.RoomTileEleven}>
            <RoomTile roomTileImage={grayRoomTileBack} roomTileImageAlt='test' />
          </div>
          <ResourceTrack />
        </div>
      </Aux>
    );
  }
}

export default CaveBoard;
