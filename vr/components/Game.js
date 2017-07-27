// @flow

// React
import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-vr';

// Components
import Question from './Question';

// Libs
import PropTypes from 'prop-types';
import styles from '../styles/main';

export default class Game extends Component {
  render() {
    return (
      <View style={styles.gameStyle}>
        <Text style={styles.text}>VRSarus!</Text>
        <Text style={styles.text}>Current Score: {this.props.score}</Text>
        <Text style={styles.text}>
          Highest Score: {this.props.highestScore}
        </Text>
        <Question
          question={this.props.question}
          pickAnswer={this.props.pickAnswer} />
      </View>
    );
  }
}

Game.propTypes = {
  highestScore: PropTypes.number,
  pickAnswer: PropTypes.func,
  question: PropTypes.object,
  score: PropTypes.number
};
