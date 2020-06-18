import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './ActionTile.css';
import ActionTile from './ActionTile';

import undergrowthActionTile from '../../assets/images/ActionTiles/UndergrowthActionTile.jpg';
import Aux from '../../hoc/Aux/Aux';

import * as actionTypes from '../../store/actions';

class UndergrowthActionTile extends Component {
  render () {
    return (
      <Aux>
        <ActionTile
          actionTileImage={undergrowthActionTile}
          actionTileImageAlt='undergrowth'
          onClick={this.props.onTakeAction}
        />
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    resources: state.resources
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onTakeAction: () => dispatch({type: actionTypes.UNDERGROWTH})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UndergrowthActionTile);
