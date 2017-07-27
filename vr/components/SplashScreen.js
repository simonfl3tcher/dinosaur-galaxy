// React
import React, { Component } from 'react';
import {
  Text,
  View,
  VrButton
} from 'react-vr';

// Components
import StartGame from './StartGame';
import GameOver from './GameOver';

export default class SplashScreen extends Component {
  render() {
    if(this.props.gameOver){
      return(
        <GameOver
          score={this.props.score}
          startNewGame={this.props.startNewGame} />
      )
    } else {
      return(
        <StartGame
          highestScore={this.props.highestScore}
          startNewGame={this.props.startNewGame} />
      )
    }
  }
}
