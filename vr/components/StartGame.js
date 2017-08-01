import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, VrButton } from 'react-vr';
import styles from '../styles/main';
import { startNewGame } from '../actions';

class StartGame extends Component {
  props: {
    highestScore: number,
    startNewGame: Function
  };

  render() {
    return (
      <View style={styles.gameStyle}>
        <Text style={styles.text}>Welcome to VRSarus</Text>

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

export default connect(
  null, { startNewGame })(StartGame);
