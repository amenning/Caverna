import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as phaseTypes from '../../store/phases';

import classes from './StatusBar.css';
import Aux from '../../hoc/Aux/Aux';

class StatusBar extends Component {

  render () {
    let orangeRoomActivationMessage = this.props.orangeRoomActions > 0
      ? <p>Remaining Orange Activations: {this.props.orangeRoomActions}</p>
      : null;

    let phaseMessage = null;

    switch (this.props.phase) {
      case (phaseTypes.SELECT_NEW_ACTION):
        phaseMessage = <p>You have {this.props.remainingActions} actions this round. Select an action tile</p>;
        break;
      case (phaseTypes.NEW_ROUND):
        phaseMessage = <p>Start of Round {this.props.round} of 7. You have {this.props.remainingActions} actions this round. Select any available action tile.</p>;
        break;
    }

    return (
      <Aux>
        <div className={classes.StatusBar}>
          <p>{this.props.status.message}</p>
          {orangeRoomActivationMessage}
          {phaseMessage}
        </div>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    round: state.round,
    remainingActions: state.remainingActions,
    status: state.status,
    phase: state.phase,
    orangeRoomActions: state.orangeRoomActions
  };
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StatusBar);
