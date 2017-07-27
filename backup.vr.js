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

class ShapeGame extends Component {
  constructor() {
    super();

    this.state = {
      gameShapes: [1, 1, 1, 1],
      score: 0,
      highestScore: 0,
      specialIndex: 0,
      playingGame: true
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
      this.setState({playingGame: false})
    }
  }

  startNewGame() {
    console.log('in here')
    this.setState({score: 0});
    this.newGameSet();
    this.setState({playingGame: true});
  }

  render() {
    if(this.state.playingGame) {
      return (
        <View style={styles.gameStyle}>
          <Text style={styles.text}>Find the odd shape!</Text>
          <Text style={styles.text}>Current Score: {this.state.score}</Text>
          <Text style={styles.text}>Highest Score: {this.state.highestScore}</Text>
          {
            this.state.gameShapes.map((shape, index) => {
              return (
                <View
                key={index}
                onEnter={() => this.pickShape(index)}
                >
                <Shape
                shapeNum={shape}
                colorNum={index}
                transform={[{translate: [(index-1.5)*1.5, 1, -5]}]}
                />
                </View>
              )
            })
          }
          <Text style={styles.questionBlock}>What means happy?</Text>
        </View>
      )
    } else {
      return (
        <View>
          <Text style={styles.gameOverText}>Game Over!</Text>
          <Text style={styles.gameOverText}>Your score was: {this.state.score}</Text>
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
  text: {
    fontSize: 0.2,
    textAlign: 'center',
    color: '#fff',
    transform: [
      {translate: [0, 2, -5]}
    ]
  },
  gameOverText: {
    fontSize: 0.2,
    textAlign: 'center',
    color: '#fff',
    transform: [
      {translate: [0, 0, -5]}
    ]
  },
  questionBlock: {
    fontSize: 0.5,
    textAlign: 'center',
    color: '#000',
    backgroundColor: '#fff',
    transform: [
      {translate: [0, -1, -5]}
    ]
  }
})

AppRegistry.registerComponent('ShapeGame', () => ShapeGame)
