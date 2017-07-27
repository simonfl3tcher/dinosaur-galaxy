import React, { Component } from 'react';
import {
  View,
  Text,
  AppRegistry,
  StyleSheet,
  AsyncStorage
} from 'react-vr';

import Shape, { shapes } from './vr/components/Shape';
import SplashScreen from './vr/components/SplashScreen';
import Game from './vr/components/Game';

import questions from './questions.json';

class ShapeGame extends Component {
  constructor() {
    super();

    this.state = {
      gameShapes: [1, 1, 1, 1],
      questions: questions,
      score: 0,
      highestScore: 0,
      specialIndex: 0,
      playingGame: false,
      gameOver: false
    }
  }

  componentDidMount() {
    AsyncStorage.getItem('highestScore')
      .then(value => {
        this.setState({highestScore: value});
      });
    this.newGameSet();
  }

  newGameSet() {
    let baseShapeId = Math.floor(Math.random() * shapes.length);
    let specialShapeId = baseShapeId;

    while(specialShapeId === baseShapeId) {
      specialShapeId = Math.floor(Math.random() * shapes.length);
    }

    let newGameShapes = [];

    for (let i = 0; i < this.state.gameShapes.length; i++) {
      newGameShapes[i] = baseShapeId;
    }

    let specialIndex = Math.floor(Math.random() * newGameShapes.length);
    newGameShapes[specialIndex] = specialShapeId;

    this.setState({
      gameShapes: newGameShapes,
      specialIndex: specialIndex
    });
  }

  pickShape(shapeIndex) {
    let score = this.state.score;
    if(this.state.specialIndex === shapeIndex) {
      score = score + 1;
      this.setState({score});

      AsyncStorage.getItem('highestScore')
      .then(value => {
        if(score > value) {
          AsyncStorage.setItem('highestScore', score)
        }
      });
      this.setState({score: score});
      this.newGameSet();
    } else {
      this.setState({
        playingGame: false,
        gameOver: true
      })
    }
  }

  startNewGame() {
    this.setState({score: 0});
    this.newGameSet();
    this.setState({
      playingGame: true,
      gameOver: false
    });
  }

  render() {
    if(this.state.playingGame){
      return (
        <Game
          score={this.state.score}
          highestScore={this.state.highestScore}
          gameShapes={this.state.gameShapes}
          pickShape={this.pickShape.bind(this)} />
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
