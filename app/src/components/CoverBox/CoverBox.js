import React, { Component } from 'react';

import classes from './CoverBox.css';
import Aux from '../../hoc/Aux/Aux';
import coverBox from '../../assets/images/CoverBox/CoverBox.jpg';

class CoverBox extends Component {
  render () {
    return (
      <Aux>
        <div className={classes.CoverBox}>
            <img src={coverBox} alt="Cover Box" />
        </div>
      </Aux>
    );
  }
}

export default CoverBox;
