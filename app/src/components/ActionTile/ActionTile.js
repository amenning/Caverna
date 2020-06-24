import React, { Component } from 'react';

import classes from './ActionTile.css';
import Aux from '../../hoc/Aux/Aux';

class ActionTile extends Component {
  render () {
    let classNames = classes.ActionTile;
    if (this.props.activeOption) {
      classNames += ' ' + classes.ActiveOption;
    }

    return (
      <Aux>
        <div className={classNames} onClick={this.props.onClick}>
          <img src={this.props.actionTileImage} alt={this.props.actionTileImageAlt} />
        </div>
      </Aux>
    );
  }
}

export default ActionTile;
