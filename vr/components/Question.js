// @flow

// React
import React, { Component } from 'react';
import { Text, View, VrButton } from 'react-vr';

// Libs
import { map } from 'lodash';
import styles from '../styles/main';

export default class Question extends Component {
  props: {
    question: Object,
    pickAnswer: Function
  };

  render() {
    return (
      <View>
        {map(this.props.question.answers, (value: string, key: string) => {
          return (
            <VrButton key={key} onClick={() => this.props.pickAnswer(key)}>
              <Text
                style={{
                  fontSize: 0.2,
                  textAlign: 'center',
                  color: '#000',
                  backgroundColor: '#fff',
                  margin: 0.1,
                  transform: [{ translate: [0, 2, -5] }],
                }}
              >
                {value}
              </Text>
            </VrButton>
          );
        })}
        <Text style={styles.questionBlock}>
          {this.props.question.question}
        </Text>
      </View>
    );
  }
}
