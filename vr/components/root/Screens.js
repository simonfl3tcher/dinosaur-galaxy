import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Game from '../Game';
import StartGame from '../StartGame';
import CompletedIt from '../CompletedIt';
import GameOver from '../GameOver';

const Screens = ({ currentScreen }) => {
  switch (currentScreen) {
    case 'game':
      return <Game />;
    case 'gameover':
      return <GameOver />;
    case 'completed':
      return <GameOver />;
    case 'start':
      return <StartGame />;
    default:
      console.log('WARN: unspecified route?', currentScreen);
      return <StartGame />;
  }
};

Screens.propTypes = {
  currentScreen: PropTypes.string,
};

export default connect(
  state => ({ currentScreen: state.screens.currentScreen }),
  {}
)(Screens);
