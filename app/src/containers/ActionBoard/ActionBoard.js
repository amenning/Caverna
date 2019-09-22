import React, { Component } from 'react';

import classes from './ActionBoard.css';
import Aux from '../../hoc/Aux/Aux';
import actionBoardOnePlayer from '../../assets/images/ActionBoard/ActionBoardOnePlayer.jpg';

class ActionBoard extends Component {
  render () {
    return (
      <Aux>
        <div className={classes.ActionBoard}>
            <img src={actionBoardOnePlayer} alt="Action Board For One Player" />
        </div>
      </Aux>
    );
  }
}

export default ActionBoard;
