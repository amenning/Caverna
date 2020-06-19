import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './StatusBar.css';
import Aux from '../../hoc/Aux/Aux';

class StatusBar extends Component {
  render () {
    return (
      <Aux>
        <div className={classes.StatusBar}>
          <p>{this.props.status.message}</p>
        </div>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    status: state.status
  };
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StatusBar);
