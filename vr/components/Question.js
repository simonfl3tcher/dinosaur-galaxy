// React
import React, { Component } from 'react';
import {
  View,
  Text,
  VrButton,
  StyleSheet
} from 'react-vr';

// Libs
import { map } from 'lodash';

export default class Question extends Component {
  render() {
    return (
      <View>
        {
          map(this.props.question.answers, (value, key) => {
            return (
              <VrButton
                key={key}
                onClick={() => this.props.pickAnswer(key)}
                >
                  <Text style={{
                    fontSize: 0.2,
                    textAlign: 'center',
                    color: '#000',
                    backgroundColor: '#fff',
                    margin: 0.1,
                    transform: [{translate: [0, 2, -5]}]
                  }}>{value}</Text>
                </VrButton>
              )
          })
        }
        <Text style={styles.questionBlock}>{this.props.question.question}</Text>
      </View>
    )
  }
}

// Styles
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
