import React, { Component } from 'react';

import classes from './CaveBoard.css';
import Aux from '../../hoc/Aux/Aux';
import ResourceMarker from '../../components/ResourceMarker/ResourceMarker';
import flaxImage from '../../assets/images/ResourceMarker/Flax.png';
import emmerImage from '../../assets/images/ResourceMarker/Emmer.png';
import stoneImage from '../../assets/images/ResourceMarker/Stone.png';
import woodImage from '../../assets/images/ResourceMarker/Wood.png';
import foodImage from '../../assets/images/ResourceMarker/Food.png';
import goldImage from '../../assets/images/ResourceMarker/Gold.png';

class ResourceTrack extends Component {
  render () {
    return (
      <Aux>
        <div>
            <div className={classes.FlaxMarker}>
                <ResourceMarker resourceMarkerImage={flaxImage} resourceMarkerImageAlt='flax' />
            </div>
            <div className={classes.EmmerMarker}>
                <ResourceMarker resourceMarkerImage={emmerImage} resourceMarkerImageAlt='emmer' />
            </div>
            <div className={classes.StoneMarker}>
                <ResourceMarker resourceMarkerImage={stoneImage} resourceMarkerImageAlt='stone' />
            </div>
            <div className={classes.WoodMarker}>
                <ResourceMarker resourceMarkerImage={woodImage} resourceMarkerImageAlt='wood' />
            </div>
            <div className={classes.FoodMarker}>
                <ResourceMarker resourceMarkerImage={foodImage} resourceMarkerImageAlt='food' />
            </div>
            <div className={classes.GoldMarker}>
                <ResourceMarker resourceMarkerImage={goldImage} resourceMarkerImageAlt='gold' />
            </div>
        </div>
      </Aux>
    );
  }
}

export default ResourceTrack;
