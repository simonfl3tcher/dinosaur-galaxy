// React
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-vr';

export default class CompletedIt extends Component {
  render() {
    return (
      <View style={styles.gameStyle}>
        <Text style={styles.text}>You have completed all of the questions</Text>
      </View>
    )
  }
}

// Styles
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
  }
})
