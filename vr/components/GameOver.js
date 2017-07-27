// React
import React, { Component } from 'react';
import {
  Text,
  View,
  VrButton,
} from 'react-vr';

// Libs
import styles from '../styles/main';

export default class GameOver extends Component {
  render() {
    return (
      <View style={styles.gameStyle}>
        <Text style={styles.text}>Game Over!</Text>
        <Text style={styles.text}>You scored: {this.props.score}</Text>

        <VrButton style={styles.button} onClick={()=> this.props.startNewGame()}>
          <Text style={styles.buttonText}>Play Game!</Text>
        </VrButton>
      </View>
    )
  }
}
