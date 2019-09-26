import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Game.css';
import Aux from '../../hoc/Aux/Aux';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import ActionBoard from '../ActionBoard/ActionBoard';
import CaveBoard from '../CaveBoard/CaveBoard';
import AvailableRoomTiles from '../AvailableRoomTiles/AvailableRoomTiles';

class Game extends Component {
  state = {}

  componentDidMount () {
  }

  render () {
    return (
      <Aux>
        <div className={classes.Game}>
            <div className={classes.ActionBoard}>
              <ActionBoard />
            </div>
            <div className={classes.CentralDisplay}>
              <div className={classes.VerticalSpacer}></div>
              <AvailableRoomTiles />
              <div className={classes.VerticalSpacer}></div>
              <CaveBoard />
              <div className={classes.VerticalSpacer}></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Game));