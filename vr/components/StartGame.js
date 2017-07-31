// @flow

// React
import React, { Component } from 'react';
import { Text, View, VrButton, Animated } from 'react-vr';

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
        toValue: 0.8,                         // Animate to smaller size
        friction: 1,                          // Bouncier spring
      }
    ).start();                                // Start the animation
  }

  render() {
    let textAnim = {
      fontSize: 0.2,
      textAlign: 'center',
      color: '#fff',
      transform: [
        { translate: [0, 2, -5] },
        { scale: this.state.bounceValue }
      ],
    }

    return (
      <View style={styles.gameStyle}>
        <Animated.Text style={textAnim}>Welcome to VRSarus</Animated.Text>
      </View>
    );
  }
}
