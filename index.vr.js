import React, { Component } from 'react';
import {
  AsyncStorage,
  AppRegistry,
  Text,
  View
} from 'react-vr';

// Libs
import { shuffle } from 'lodash'

// Components
import CompletedIt from './vr/components/CompletedIt';
import Game from './vr/components/Game';
import SplashScreen from './vr/components/SplashScreen';

// Data
import questions from './data/questions.json';

class ShapeGame extends Component {
  constructor() {
    super();

    this.state = {
      outstandingQuestions: questions,
      question: {},
      score: 0,
      highestScore: 0,
      playingGame: false,
      gameOver: false
    }
  }

  componentDidMount() {
    AsyncStorage.getItem('highestScore')
      .then(value => {
        this.setState({highestScore: value});
      });
  }

  startNewGame() {
    this.setState({
      score: 0,
      outstandingQuestions: questions,
      playingGame: true,
      gameOver: false
    }, () => this.setNewGame());
  }

  setNewGame() {
    let outstandingQuestions = shuffle(this.state.outstandingQuestions)
    let question = outstandingQuestions.pop();
    this.setState({
      question,
      outstandingQuestions
    });
  }

  pickAnswer(key) {
    let score = this.state.score;
    if(this.state.question.answer === key) {
      score++;
      this.setState({score});
      this.setNewGame();
      AsyncStorage.getItem('highestScore')
        .then(value => {
          if(score > value) {
            AsyncStorage.setItem('highestScore', score);
          }
        })
    } else {
      this.setState({
        playingGame: false,
        gameOver: true
      })
    }
  }

  render() {
    if(!this.state.question) {
      return(
        <CompletedIt />
      )
    } else if(this.state.playingGame){
      return (
        <Game
          score={this.state.score}
          highestScore={this.state.highestScore}
          question={this.state.question}
          pickAnswer={this.pickAnswer.bind(this)} />
      )
    } else {
      return(
        <SplashScreen
          score={this.state.score}
          highestScore={this.state.highestScore}
          gameOver={this.state.gameOver}
          startNewGame={this.startNewGame.bind(this)} />
      )
    }
  }
}

AppRegistry.registerComponent('ShapeGame', () => ShapeGame)
