import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  VrButton
} from 'react-vr';

import Question from './Question';

export default class Game extends Component {
  render() {
    return (
      <View style={styles.gameStyle}>
        <Text style={styles.text}>VRSarus!</Text>
        <Text style={styles.text}>Current Score: {this.props.score}</Text>
        <Text style={styles.text}>Highest Score: {this.props.highestScore}</Text>
        <Question gameShapes={this.props.gameShapes} pickShape={this.props.pickShape} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  gameStyle: {
    transform: [
      { translate: [-2.25, 0, 0] }
    ]
  },
  text: {
    fontSize: 0.2,
    textAlign: 'center',
    color: '#fff',
    transform: [
      {translate: [0, 2, -5]}
    ]
  },
  gameOverText: {
    fontSize: 0.2,
    textAlign: 'center',
    color: '#fff',
    transform: [
      {translate: [0, 0, -5]}
    ]
  }
})
