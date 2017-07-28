// @flow

// React
import React, { Component } from 'react';
import { Text, View, VrButton } from 'react-vr';

// Libs
import styles from '../styles/main';

export default class StartGame extends Component {
  props: {
    highestScore: number,
    startNewGame: Function
  };

  render() {
    return (
      <View style={styles.gameStyle}>
        <Text style={styles.text}>Welcome to VRSarus</Text>
        <Text style={styles.text}>
          Your highest score: {this.props.highestScore}
        </Text>

        <VrButton
          style={styles.button}
          onClick={() => this.props.startNewGame()}
        >
          <Text style={styles.buttonText}>Play Game!</Text>
        </VrButton>
      </View>
    );
  }
}
