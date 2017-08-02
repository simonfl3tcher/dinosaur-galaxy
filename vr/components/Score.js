// @flow

// React
import React, { Component } from 'react';
import { View, Model, asset } from 'react-vr';

// Libs
import { map, split } from 'lodash';

export default class Score extends Component {
  props: {
    precedingTextModel: string,
    score: number
  };

  render() {
    let scoreArray = split(this.props.score.toString(), '');
    return (
      <View
        style={{ transform: [{ translate: [0, 0.5, -4] }, { scale: 0.01 }] }}
      >
        <Model
          style={{
            flex: 1,
            width: 0.5,
            alignItems: 'center',
            flexDirection: 'column',
          }}
          source={{
            obj: asset(
              `${this.props.precedingTextModel}/${this.props
                .precedingTextModel}.obj`
            ),
            mtl: asset(
              `${this.props.precedingTextModel}/${this.props
                .precedingTextModel}.mtl`
            ),
          }}
        />
        {map(scoreArray, (value, index) => {
          return (
            <Model
              style={{
                flex: 1,
                width: 0.1,
                flexDirection: 'row',
              }}
              key={index}
              source={{
                obj: asset(`numbers/${value}/${value}.obj`),
                mtl: asset(`numbers/${value}/${value}.mtl`),
              }}
            />
          );
        })}
      </View>
    );
  }
}
