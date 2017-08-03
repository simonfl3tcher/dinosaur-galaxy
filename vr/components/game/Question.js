import React, { Component } from 'react';
import { View, Model, VrButton, asset } from 'react-vr';
import { map } from 'lodash';
import Character from './Character';

export default class Question extends Component {
  props: {
    question: Object,
    pickAnswer: Function,
    nextQuestion: Function
  };

  nextQuestion() {
    this.props.nextQuestion();
  }

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
        <VrButton onClick={() => this.nextQuestion()}>
          <Model
            style={{
              transform: [{ translate: [2, -2, -5] }, { scale: 0.01 }],
            }}
            lit={true}
            source={{
              obj: asset('next/next.obj'),
              mtl: asset('next/next.mtl'),
            }}
          />
        </VrButton>
      </View>
    );
  }
}
