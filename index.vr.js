// @flow

// React
import React, { Component } from 'react';
import { AsyncStorage, AppRegistry } from 'react-vr';

// Libs
import { shuffle } from 'lodash';

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
    seconds: number,
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
      seconds: 45,
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
      seconds: 45,
      question: question,
      outstandingQuestions: outstandingQuestions,
    });
    this.startTimer();
  }

  startTimer() {
    if (this.timer == 0) {
      this.timer = setInterval(this.countDown.bind(this), 1000);
    }
  }

  countDown() {
    let secs = this.state.seconds - 1;
    this.setState({
      seconds: secs,
    });

    // Check if we're at zero.
    if (secs == 0) {
      this.timer = 0;
      this.setNewGame();
    }
  }

  runScoringAlgorithm() {
    return (
      this.state.seconds * 10 * (this.state.score == 0 ? 1 : this.state.score)
    );
  }

  pickAnswer(key: String) {
    if (this.state.question.answer === key) {
      let score = this.runScoringAlgorithm();
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
          seconds={this.state.seconds}
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
