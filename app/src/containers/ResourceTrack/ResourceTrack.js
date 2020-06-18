import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './ResourceTrack.css';
import Aux from '../../hoc/Aux/Aux';
import ResourceMarker from '../../components/ResourceMarker/ResourceMarker';
import flaxImage from '../../assets/images/ResourceMarker/Flax.png';
import emmerImage from '../../assets/images/ResourceMarker/Emmer.png';
import stoneImage from '../../assets/images/ResourceMarker/Stone.png';
import woodImage from '../../assets/images/ResourceMarker/Wood.png';
import foodImage from '../../assets/images/ResourceMarker/Food.png';
import goldImage from '../../assets/images/ResourceMarker/Gold.png';
import gold10PlusImage from '../../assets/images/ResourceMarker/Gold10Plus.png';

class ResourceTrack extends Component {
  render () {
    const classCountMapping = {
      0: classes.ZeroResource,
      1: classes.OneResource,
      2: classes.TwoResource,
      3: classes.ThreeResource,
      4: classes.FourResource,
      5: classes.FiveResource,
      6: classes.SixResource,
      7: classes.SevenResource,
      8: classes.EightResource,
      9: classes.NineResource,
      10: classes.ZeroResource,
      11: classes.OneResource,
      12: classes.TwoResource,
      13: classes.ThreeResource,
      14: classes.FourResource,
      15: classes.FiveResource,
      16: classes.SixResource,
      17: classes.SevenResource,
      18: classes.EightResource,
      19: classes.NineResource
    };

    return (
      <Aux>
        <div>
          <div className={
            [
              classes.FlaxMarker,
              classCountMapping[this.props.resources.flax]
            ].join(' ')
          }>
            <ResourceMarker resourceMarkerImage={flaxImage} resourceMarkerImageAlt='flax' />
          </div>
          <div className={
            [
              classes.EmmerMarker,
              classCountMapping[this.props.resources.emmer]
            ].join(' ')
          }>
            <ResourceMarker resourceMarkerImage={emmerImage} resourceMarkerImageAlt='emmer' />
          </div>
          <div className={
            [
              classes.StoneMarker,
              classCountMapping[this.props.resources.stone]
            ].join(' ')
          }>
            <ResourceMarker resourceMarkerImage={stoneImage} resourceMarkerImageAlt='stone' />
          </div>
          <div className={
            [
              classes.WoodMarker,
              classCountMapping[this.props.resources.wood]
            ].join(' ')
          }>
            <ResourceMarker resourceMarkerImage={woodImage} resourceMarkerImageAlt='wood' />
          </div>
          <div className={
            [
              classes.FoodMarker,
              classCountMapping[this.props.resources.food]
            ].join(' ')
          }>
            <ResourceMarker resourceMarkerImage={foodImage} resourceMarkerImageAlt='food' />
          </div>
          <div className={
            [
              classes.GoldMarker,
              classCountMapping[this.props.resources.gold]
            ].join(' ')
          }>
            <ResourceMarker
              resourceMarkerImage={this.props.resources.gold > 9 ? gold10PlusImage : goldImage}
              resourceMarkerImageAlt='gold'
            />
          </div>
        </div>
      </Aux>
    );
  }
}


const mapStateToProps = state => {
  return {
    resources: state.resources
  };
}

const mapDispatchToProps = dispatch => {
  return {
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ResourceTrack);
