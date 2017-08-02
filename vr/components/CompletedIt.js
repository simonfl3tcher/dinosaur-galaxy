import React, { Component } from 'react';
import { Text, View } from 'react-vr';
import styles from '../styles/main';

export default class CompletedIt extends Component {
  render() {
    return (
      <View style={styles.gameStyle}>
        <Text style={styles.text}>You have completed all of the questions</Text>
      </View>
    );
  }
}
