import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './ActionTile.css';
import ActionTile from './ActionTile';

import cultivationActionTile from '../../assets/images/ActionTiles/CultivationActionTile.jpg';
import Aux from '../../hoc/Aux/Aux';

import * as actionTypes from '../../store/actions';

class CultivationActionTile extends Component {
  render () {
    return (
      <Aux>
        <ActionTile
          actionTileImage={cultivationActionTile}
          actionTileImageAlt='cultivation'
          onClick={this.props.onTakeAction}
          activeOption={this.props.activeOption}
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
    onTakeAction: () => dispatch({type: actionTypes.CULTIVATE})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CultivationActionTile);
