import React, { Component } from 'react';

import classes from './CaveBoard.css';
import Aux from '../../hoc/Aux/Aux';
import caveBoard from '../../assets/images/CaveBoard/CaveBoard.jpg';
import RoomTile from '../../components/RoomTile/RoomTile';
import grayRoomTileBack from '../../assets/images/RoomTiles/DarkGrayRoomTileBacks.jpg';
import ResourceMarker from '../../components/ResourceMarker/ResourceMarker';
import flaxImage from '../../assets/images/ResourceMarker/Flax.png';
import emmerImage from '../../assets/images/ResourceMarker/Emmer.png';
import stoneImage from '../../assets/images/ResourceMarker/Stone.png';
import woodImage from '../../assets/images/ResourceMarker/Wood.png';
import foodImage from '../../assets/images/ResourceMarker/Food.png';
import goldImage from '../../assets/images/ResourceMarker/Gold.png';

/**
 * The cave board room tile placement numbers are as follows:
 * 1 2
 * 3 4
 * 5 6
 *   7
 * 8 9 10
 */
class CaveBoard extends Component {
  render () {
    return (
      <Aux>
        <div className={classes.HorizontalSpacer}></div>
        <div className={classes.CaveBoard}>
            <div>
                <img src={caveBoard} alt="Player Cave Board" className={classes.CaveBoardBackgroundResponsiveImage} />
            </div>
            <div className={classes.RoomTileOne}>
                <RoomTile roomTileImage={grayRoomTileBack} roomTileImageAlt='test' />
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
                <RoomTile roomTileImage={grayRoomTileBack} roomTileImageAlt='test' />
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
            <div className={classes.FlaxMarker}>
                <ResourceMarker resourceMarkerImage={flaxImage} resourceMarkerImageAlt='flax' />
            </div>
            <div className={classes.EmmerMarker}>
                <ResourceMarker resourceMarkerImage={emmerImage} resourceMarkerImageAlt='emmer' />
            </div>
            <div className={classes.StoneMarker}>
                <ResourceMarker resourceMarkerImage={stoneImage} resourceMarkerImageAlt='stone' />
            </div>
            <div className={classes.WoodMarker}>
                <ResourceMarker resourceMarkerImage={woodImage} resourceMarkerImageAlt='wood' />
            </div>
            <div className={classes.FoodMarker}>
                <ResourceMarker resourceMarkerImage={foodImage} resourceMarkerImageAlt='food' />
            </div>
            <div className={classes.GoldMarker}>
                <ResourceMarker resourceMarkerImage={goldImage} resourceMarkerImageAlt='gold' />
            </div>
        </div>
        <div className={classes.HorizontalSpacer}></div>
      </Aux>
    );
  }
}

export default CaveBoard;
