// @flow

// React
import React, { Component } from 'react';
import { Image, View, VrButton, Animated, Model, asset } from 'react-vr';

// Libs
import styles from '../styles/main';

var AnimatedModel = Animated.createAnimatedComponent(Model);

export default class StartGame extends Component {
  props: {
    highestScore: number,
    startNewGame: Function
  };

  constructor(props) {
    super(props);
    this.state = {
      rotateValue: new Animated.Value(0),
    };
  }

  rotate() {
    Animated.spring(
      this.state.rotateValue,
      {
        toValue: 360,
        tension: 60,
      }
    ).start();
  }

  render() {
    return (
      <VrButton style={styles.gameStyle} onClick={() => this.rotate()}>
        <AnimatedModel
          style={{
            transform: [
              { translate: [2, 0, -5] },
              { scale: 0.03 },
              //{ rotateX: this.state.rotateValue },
              //{ rotateY: this.state.rotateValue },
              { rotateY: this.state.rotateValue },
              //{ rotateZ: 0 },
            ],
          }}
          source={{
            obj: asset('Squirrel.obj'),
            mtl: asset('Squirrel.mtl'),
          }} />
      </VrButton>
    );
  }
}
