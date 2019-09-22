import React, { Component } from 'react';

import classes from './CaveBoard.css';
import Aux from '../../hoc/Aux/Aux';
import caveBoard from '../../assets/images/CaveBoard/CaveBoard.jpg';

class CaveBoard extends Component {
  render () {
    return (
      <Aux>
        <div className={classes.CaveBoard}>
            <img src={caveBoard} alt="Player Cave Board" />
        </div>
      </Aux>
    );
  }
}

export default CaveBoard;
