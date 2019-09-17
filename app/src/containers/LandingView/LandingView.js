import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Aux/Aux';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import CoverBox from '../../components/CoverBox/CoverBox';

class LandingView extends Component {
  state = {}

  componentDidMount () {
  }

  render () {
    return (
      <Aux>
        <CoverBox />
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

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(LandingView));
