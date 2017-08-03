import React, { Component } from 'react';
import { Text, View, Model, asset } from 'react-vr';
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
            <Character
              key={value.character}
              index={i++}
              model={value.character}
              pickAnswer={() => this.props.pickAnswer(key)}
            />
          );
        })}
        <Model
          style={{
            transform: [{ translate: [2, -1.5, -5] }, { scale: 0.02 }],
          }}
          lit={true}
          source={{
            obj: asset(`characters/dino-q${this.props.question.id}.obj`),
            mtl: asset(`characters/dino-q${this.props.question.id}.mtl`),
          }}
        />
      </View>
    );
  }
}
