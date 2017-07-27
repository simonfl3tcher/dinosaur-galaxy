// @flow

// React
import React, {Component} from 'react';

// Libs
import PropTypes from 'prop-types';

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
      );
    } else {
      return(
        <StartGame
          highestScore={this.props.highestScore}
          startNewGame={this.props.startNewGame} />
      );
    }
  }
}

SplashScreen.propTypes = {
  gameOver: PropTypes.bool,
  score: PropTypes.number,
  highestScore: PropTypes.number,
  startNewGame: PropTypes.func,
};
