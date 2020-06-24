import React, { Component } from 'react';

import classes from './ActionTile.css';
import ActionTile from './ActionTile';

import houseworkActionTile from '../../assets/images/ActionTiles/HouseworkActionTile.jpg';
import Aux from '../../hoc/Aux/Aux';

class HouseworkActionTile extends Component {
  render () {
    return (
      <Aux>
        <ActionTile
          actionTileImage={houseworkActionTile}
          actionTileImageAlt='housework'
          activeOption={this.props.activeOption}
        />
      </Aux>
    );
  }
}

export default HouseworkActionTile;
