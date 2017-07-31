// @flow

// React
import React, { Component } from 'react';
import { Image, View, VrButton, Animated } from 'react-vr';

// Libs
import styles from '../styles/main';

export default class StartGame extends Component {
  props: {
    highestScore: number,
    startNewGame: Function
  };

  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.state.bounceValue.setValue(1.5);     // Start large
    Animated.spring(                          // Base: spring, decay, timing
      this.state.bounceValue,                 // Animate `bounceValue`
      {
        toValue: -90,                         // Animate to smaller size
        spring: 100,                           // Bouncier spring
      }
    ).start();                                // Start the animation
  }

  render() {
    let animatedImage = {
    width: 1,
    height: 1,
    transform: [
        { translate: [0, 2, -5] },
        { rotateX: this.state.bounceValue }
      ],
    }

    return (
      <View style={styles.gameStyle}>
        <Animated.Image
          source={{uri: '/static_assets/dino.png'}}
          style={animatedImage} />
      </View>
    );
  }
}
