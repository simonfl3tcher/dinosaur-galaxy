// @flow

// React
import React, { Component } from 'react';
import { AsyncStorage, AppRegistry } from 'react-vr';

// Libs
import { shuffle, find } from 'lodash';

// Components
import CompletedIt from './vr/components/CompletedIt';
import Game from './vr/components/Game';
import SplashScreen from './vr/components/SplashScreen';

// Data
import questions from './data/questions.json';

export default class VRsaurus extends Component {
  // Flow Annotation
  state: {
    outstandingQuestions: Array<Object>,
    question: Object,
    score: number,
    highestScore: number,
    playingGame: boolean,
    gameOver: boolean
  };
  timer: number;

  constructor() {
    super();

    this.state = {
      outstandingQuestions: questions,
      question: {},
      score: 0,
      highestScore: 0,
      playingGame: false,
      gameOver: false,
    };
    this.timer = 0;
  }

  componentDidMount() {
    AsyncStorage.getItem('highestScore').then(value => {
      this.setState({ highestScore: value });
    });
  }

  startNewGame() {
    this.setState(
      {
        score: 0,
        outstandingQuestions: questions,
        playingGame: true,
        gameOver: false,
      },
      () => this.setNewGame()
    );
  }

  setNewGame() {
    let outstandingQuestions: Array<Object> = shuffle(
      this.state.outstandingQuestions
    );
    let question = outstandingQuestions.pop();
    this.setState({
      question: question,
      outstandingQuestions: outstandingQuestions,
    });
    this.startTimer();
  }

  runScoringAlgorithm(score: number) {
    return score + (this.state.score == 0 ? 1 : this.state.score);
  }

  getScoreForAnswer(key: String) {
    let obj = find(this.state.question.correct_answers, ['key', key]);
    return obj ? obj.score : 0;
  }

  pickAnswer(key: String) {
    let obj = find(this.state.question.correct_answers, ['key', key]);

    if (obj) {
      let points = this.getScoreForAnswer(key);
      let score = this.runScoringAlgorithm(points);
      this.setState({ score }, () => this.setNewGame());
      AsyncStorage.getItem('highestScore').then(value => {
        if (score > value) {
          AsyncStorage.setItem('highestScore', score);
        }
      });
    } else {
      this.setState({
        playingGame: false,
        gameOver: true,
      });
    }
  }

  render() {
    if (!this.state.question) {
      return <CompletedIt />;
    } else if (this.state.playingGame) {
      return (
        <Game
          score={this.state.score}
          highestScore={this.state.highestScore}
          question={this.state.question}
          pickAnswer={this.pickAnswer.bind(this)}
        />
      );
    } else {
      return (
        <SplashScreen
          score={this.state.score}
          highestScore={this.state.highestScore}
          gameOver={this.state.gameOver}
          startNewGame={this.startNewGame.bind(this)}
        />
      );
    }
  }
}

AppRegistry.registerComponent('VRsaurus', () => VRsaurus);
