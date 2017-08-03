import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-vr';
import Question from './game/Question';
import styles from '../styles/main';
import { loadQuestions, pickAnswer, nextQuestion } from '../actions';

class Game extends Component {
  props: {
    pickAnswer: Function,
    loadQuestions: Function,
    nextQuestion: Function,
    currentQuestion: Object,
    score: number,
    seconds: number
  };

  componentDidMount() {
    this.props.loadQuestions();
  }

  render() {
    if (!this.props.currentQuestion) {
      return <Text style={styles.text}>Loading</Text>;
    }

    return (
      <View>
        <Question
          question={this.props.currentQuestion}
          nextQuestion={this.props.nextQuestion}
          pickAnswer={this.props.pickAnswer}
        />
      </View>
    );
  }
}

export default connect(
  state => ({
    score: state.game.score,
    outstandingQuestions: state.game.outstandingQuestions,
    currentQuestion: state.game.currentQuestion,
  }),
  { pickAnswer, loadQuestions, nextQuestion }
)(Game);
