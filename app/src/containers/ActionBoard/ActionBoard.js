import React, { Component } from 'react';

import classes from './ActionBoard.css';
import Aux from '../../hoc/Aux/Aux';
import actionBoardOnePlayer from '../../assets/images/ActionBoard/ActionBoardOnePlayer.jpg';
import ActionTile from '../../components/ActionTile/ActionTile';

// Starting Action Tiles
import CultivationActionTile from '../../components/ActionTile/CultivationActionTile';
import HouseworkActionTile from '../../components/ActionTile/HouseworkActionTile';
import UndergrowthActionTile from '../../components/ActionTile/UndergrowthActionTile';
import ExcavationActionTile from '../../components/ActionTile/ExcavationActionTile';

import groupTwoActionTileBack from '../../assets/images/ActionTiles/GroupTwoActionTileBack.png';
import masonryActionTile from '../../assets/images/ActionTiles/MasonryActionTile.jpg';
import furnishingActionTile from '../../assets/images/ActionTiles/FurnishingActionTile.jpg';
import underminingActionTile from '../../assets/images/ActionTiles/UnderminingActionTile.jpg';
import expeditionActionTile from '../../assets/images/ActionTiles/ExpeditionActionTile.jpg';

import groupThreeActionTileBack from '../../assets/images/ActionTiles/GroupThreeActionTileBack.png';
import expansionActionTile from '../../assets/images/ActionTiles/ExpansionActionTile.jpg';
import driftMiningActionTile from '../../assets/images/ActionTiles/DriftMiningActionTile.jpg';

import groupFourActionTileBack from '../../assets/images/ActionTiles/GroupFourActionTileBack.png';
import renovationActionTile from '../../assets/images/ActionTiles/RenovationActionTile.jpg';


class ActionBoard extends Component {
  render () {
    return (
      <Aux>
        <div className={classes.HorizontalSpacer}></div>
        <div className={classes.ActionBoard}>
          <div>
            <img src={actionBoardOnePlayer} alt="Action Board For One Player" className={classes.ActionBoardBackgroundResponsiveImage} />
          </div>
          <div className={classes.ActionTileOne}>
            <HouseworkActionTile activeOption={true} />
          </div>
          <div className={classes.ActionTileTwo}>
            <UndergrowthActionTile activeOption={true} />
          </div>
          <div className={classes.ActionTileThree}>
            <CultivationActionTile activeOption={true} />
          </div>
          <div className={classes.ActionTileFour}>
            <ExcavationActionTile activeOption={true} />
          </div>
          <div className={classes.ActionTileFive}>
            <ActionTile actionTileImage={masonryActionTile} actionTileImageAlt='masonry' />
          </div>
          <div className={classes.ActionTileSix}>
            <ActionTile actionTileImage={furnishingActionTile} actionTileImageAlt='furnishing' />
          </div>
          <div className={classes.ActionTileSeven}>
            <ActionTile actionTileImage={underminingActionTile} actionTileImageAlt='undermining' />
          </div>
          <div className={classes.ActionTileEight}>
            <ActionTile actionTileImage={expansionActionTile} actionTileImageAlt='expansion' />
          </div>
          <div className={classes.ActionTileNine}>
            <ActionTile actionTileImage={driftMiningActionTile} actionTileImageAlt='drift mining' />
          </div>
          <div className={classes.ActionTileTen}>
            <ActionTile actionTileImage={expeditionActionTile} actionTileImageAlt='expedition' />
          </div>
          <div className={classes.ActionTileEleven}>
            <ActionTile actionTileImage={renovationActionTile} actionTileImageAlt='renovation' />
          </div>
        </div>
      </Aux>
    );
  }
}

export default ActionBoard;
