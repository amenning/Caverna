import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Aux/Aux';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import ActionBoard from '../../components/ActionBoard/ActionBoard';

class Game extends Component {
  state = {}

  componentDidMount () {
  }

  render () {
    return (
      <Aux>
        <ActionBoard />
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

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Game));