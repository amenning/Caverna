import React, { Component } from 'react';

import classes from './ActionBoard.css';
import Aux from '../../hoc/Aux/Aux';
import actionBoardOnePlayer from '../../assets/images/ActionBoard/ActionBoardOnePlayer.jpg';
import ActionTile from '../../components/ActionTile/ActionTile';
import startingActionTileBack from '../../assets/images/ActionTiles/StartingActionTileBack.png';
import groupTwoActionTileBack from '../../assets/images/ActionTiles/GroupTwoActionTileBack.png';
import groupThreeActionTileBack from '../../assets/images/ActionTiles/GroupThreeActionTileBack.png';
import groupFourActionTileBack from '../../assets/images/ActionTiles/GroupFourActionTileBack.png';


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
              <ActionTile actionTileImage={startingActionTileBack} actionTileImageAlt='test' />
          </div>
          <div className={classes.ActionTileTwo}>
            <ActionTile actionTileImage={startingActionTileBack} actionTileImageAlt='test' />
          </div>
          <div className={classes.ActionTileThree}>
            <ActionTile actionTileImage={startingActionTileBack} actionTileImageAlt='test' />
          </div>
          <div className={classes.ActionTileFour}>
            <ActionTile actionTileImage={startingActionTileBack} actionTileImageAlt='test' />
          </div>
          <div className={classes.ActionTileFive}>
              <ActionTile actionTileImage={groupTwoActionTileBack} actionTileImageAlt='test' />
          </div>
          <div className={classes.ActionTileSix}>
            <ActionTile actionTileImage={groupTwoActionTileBack} actionTileImageAlt='test' />
          </div>
          <div className={classes.ActionTileSeven}>
            <ActionTile actionTileImage={groupTwoActionTileBack} actionTileImageAlt='test' />
          </div>
          <div className={classes.ActionTileEight}>
            <ActionTile actionTileImage={groupThreeActionTileBack} actionTileImageAlt='test' />
          </div>
          <div className={classes.ActionTileNine}>
              <ActionTile actionTileImage={groupThreeActionTileBack} actionTileImageAlt='test' />
          </div>
          <div className={classes.ActionTileTen}>
            <ActionTile actionTileImage={groupThreeActionTileBack} actionTileImageAlt='test' />
          </div>
          <div className={classes.ActionTileEleven}>
            <ActionTile actionTileImage={groupFourActionTileBack} actionTileImageAlt='test' />
          </div>
        </div>
      </Aux>
    );
  }
}

export default ActionBoard;
