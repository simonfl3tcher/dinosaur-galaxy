import React, { Component } from 'react';
import {
  View,
  Text,
  VrButton,
  StyleSheet
} from 'react-vr';

export default class Question extends Component {
  render() {
    return (
      <View>
        {
          this.props.gameShapes.map((shape, index) => {
            return (
              <VrButton
                key={index}
                onClick={() => this.props.pickShape(index)}
                >
                  <Text style={{
                    fontSize: 0.2,
                    textAlign: 'center',
                    color: '#000',
                    backgroundColor: '#fff',
                    margin: 0.1,
                    transform: [{translate: [0, 2, -5]}]
                  }}>Point {index}</Text>
                </VrButton>
              )
            })
          }
          <Text style={styles.questionBlock}>What means happy?</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  questionBlock: {
    fontSize: 0.5,
    textAlign: 'center',
    color: '#000',
    backgroundColor: '#fff',
    transform: [
      {translate: [0, 1, -5]}
    ]
  }
})
