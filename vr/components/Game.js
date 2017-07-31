// @flow

// React
import React, { Component } from 'react';
import { Text, View } from 'react-vr';

// Components
import Question from './Question';

// Libs
import styles from '../styles/main';

export default class Game extends Component {
  props: {
    highestScore: number,
    pickAnswer: Function,
    question: Object,
    score: number,
    seconds: number
  };

  render() {
    return (
      <View style={styles.gameStyle}>
        <Text style={styles.text}>VRSarus!</Text>
        <Text style={styles.text}>
          Current Score: {this.props.score}
        </Text>
        <Text style={styles.text}>
          Highest Score: {this.props.highestScore}
        </Text>
        <Text style={styles.text}>
          Timer: {this.props.seconds}
        </Text>
        <Question
          question={this.props.question}
          pickAnswer={this.props.pickAnswer}
        />
      </View>
    );
  }
}
