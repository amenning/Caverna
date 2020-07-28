import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as phaseTypes from '../../store/phases';

import classes from './ActionTile.css';
import Aux from '../../hoc/Aux/Aux';

class ActionTile extends Component {
  activateActionTile = () => {
    if (this.props.phase == phaseTypes.SELECT_NEW_ACTION || this.props.phase == phaseTypes.NEW_ROUND) {
      this.props.onClick();
    }
  }

  render () {
    let classNames = classes.ActionTile;
    if (this.props.phase == phaseTypes.SELECT_NEW_ACTION || this.props.phase == phaseTypes.NEW_ROUND) {
      classNames += ' ' + classes.ActiveOption;
    }

    return (
      <Aux>
        <div className={classNames} onClick={this.activateActionTile}>
          <img src={this.props.actionTileImage} alt={this.props.actionTileImageAlt} />
        </div>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    phase: state.phase
  };
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionTile);
