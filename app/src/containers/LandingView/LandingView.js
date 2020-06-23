import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './LandingView.css';
import Aux from '../../hoc/Aux/Aux';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import CoverBox from '../../components/CoverBox/CoverBox';
import Button from '../../components/UI/Button/Button';

class LandingView extends Component {
  state = {}

  nextPath (path) {
    this.props.history.push(path);
  }

  render () {
    return (
      <Aux>
        <div className={classes.LandingView}>
          <CoverBox />
          <Button btnType="Success" clicked={() => this.nextPath('/Game')}>Play</Button>
        </div>
      </Aux>
    );
  };
}

const mapStateToProps = state => {
  return {
  };
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withErrorHandler(LandingView)));
