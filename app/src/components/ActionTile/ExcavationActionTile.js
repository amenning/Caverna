import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './ActionTile.css';
import ActionTile from './ActionTile';

import excavationActionTile from '../../assets/images/ActionTiles/ExcavationActionTile.jpg';
import Aux from '../../hoc/Aux/Aux';

import * as actionTypes from '../../store/actions';

class ExcavationActionTile extends Component {
  render () {
    return (
      <Aux>
        <ActionTile
          actionTileImage={excavationActionTile}
          actionTileImageAlt='excavation'
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
    onTakeAction: () => dispatch({type: actionTypes.EXCAVATION})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExcavationActionTile);
