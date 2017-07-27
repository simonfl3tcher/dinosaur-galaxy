// React
import React, { Component } from 'react';
import {
  Text,
  View,
  VrButton
} from 'react-vr';

// Libs
import styles from '../styles/main';

export default class StartGame extends Component {
  render() {
    return (
      <View style={styles.gameStyle}>
        <Text style={styles.text}>Welcome to VRSarus</Text>
        <Text style={styles.text}>You highest score is: {this.props.highestScore}</Text>

        <VrButton style={styles.button} onClick={()=> this.props.startNewGame()}>
          <Text style={styles.buttonText}>Play Game!</Text>
        </VrButton>
      </View>
    )
  }
}
