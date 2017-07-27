// @flow

// React
import React, { Component } from 'react';
import { Text, View, VrButton } from 'react-vr';

// Libs
import PropTypes from 'prop-types';
import styles from '../styles/main';

export default class StartGame extends Component {
  render() {
    return (
      <View style={styles.gameStyle}>
        <Text style={styles.text}>Welcome to VRSarus</Text>
        <Text style={styles.text}>
          Your highest score: {this.props.highestScore}
        </Text>

        <VrButton
          style={styles.button}
          onClick={() => this.props.startNewGame()}
        >
          <Text style={styles.buttonText}>Play Game!</Text>
        </VrButton>
      </View>
    );
  }
}

StartGame.propTypes = {
  highestScore: PropTypes.number,
  startNewGame: PropTypes.func,
};
