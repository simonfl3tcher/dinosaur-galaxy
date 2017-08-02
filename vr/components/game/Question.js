import React, { Component } from 'react';
import { Text, View } from 'react-vr';
import { map } from 'lodash';
import styles from '../../styles/main';
import Character from './Character';

export default class Question extends Component {
  props: {
    question: Object,
    pickAnswer: Function
  };

  render() {
    let i = 1;
    return (
      <View>
        {map(this.props.question.answers, (value: string, key: string) => {
          return (
            <Character key={value.character} index={i++} model={value.character} pickAnswer={() => this.props.pickAnswer(key) } />
          );
        })}
        <Text style={styles.questionBlock}>
          {this.props.question.question}
        </Text>
      </View>
    );
  }
}
