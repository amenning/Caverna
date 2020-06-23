import React, { Component } from 'react';

import classes from './ResourceMarker.css';
import Aux from '../../hoc/Aux/Aux';

class ResourceMarker extends Component {
  render () {
    return (
      <Aux>
        <div className={classes.ResourceMarker}>
          <img src={this.props.resourceMarkerImage} alt={this.props.resourceMarkerImageAlt} />
        </div>
      </Aux>
    );
  }
}

export default ResourceMarker;
