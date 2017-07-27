import React, { Component } from 'react';
import {
  Text,
  View,
  VrButton,
  StyleSheet
} from 'react-vr';

export default class SplashScreen extends Component {
  render() {
    if(this.props.gameOver){
      return(
        <View style={styles.gameStyle}>
          <Text style={styles.text}>Game Over!</Text>
          <Text style={styles.text}>You scored: {this.props.score}</Text>

          <VrButton style={styles.button} onClick={()=> this.props.startNewGame()}>
            <Text style={styles.buttonText}>Play Game!</Text>
          </VrButton>
        </View>
      )
    } else {
      return(
        <View style={styles.gameStyle}>
          <Text style={styles.text}>Welcome to VRSarus</Text>
          <Text style={styles.text}>You highest score is: {this.props.highestScore}</Text>

          <VrButton style={styles.button} onClick={()=> this.props.startNewGame()}>
            <Text style={styles.buttonText}>Play Game!</Text>
          </VrButton>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  gameStyle: {
    transform: [
      { translate: [-2.25, 0, 0] }
    ]
  },
  button: {
    backgroundColor: '#fff',
    transform: [
      {translate: [0, 2, -5]}
    ]
  },
  text: {
    fontSize: 0.2,
    textAlign: 'center',
    color: '#fff',
    transform: [
      {translate: [0, 2, -5]}
    ]
  },
  buttonText: {
    fontSize: 0.2,
    textAlign: 'center',
    color: '#000'
  }
})
