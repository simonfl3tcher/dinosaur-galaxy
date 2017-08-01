// @flow

// React
import React, { Component } from 'react';
import { Text, View, Sound, asset } from 'react-vr';

// Components
import Question from './Question';
import Score from './Score';

// Libs
import styles from '../styles/main';

export default class Game extends Component {
  props: {
    highestScore: number,
    pickAnswer: Function,
    question: Object,
    score: number
  };

  render() {
    return (
      <View style={styles.gameStyle}>
        <Text style={styles.text}>VRSarus!</Text>
        <Text style={styles.text}>
          Current Score: {this.props.score}
        </Text>
        <Score
          precedingTextModel="your-high-score"
          score={this.props.highestScore}
        />
        <Sound
          loop={true}
          volume={0.5}
          source={{
            mp3: asset('ambient.mp3'),
          }}
        />
        <Question
          question={this.props.question}
          pickAnswer={this.props.pickAnswer}
        />
      </View>
    );
  }
}
