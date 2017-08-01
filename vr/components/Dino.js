// @flow

// React
import React, { Component } from 'react';
import { Model, asset } from 'react-vr';

export default class Dino extends Component {
  render() {
    return (
      <Model
        style={{
          transform: [
            { translate: [-5, -5, -4] },
            { scale: 0.03 },
            { rotateX: -25 },
            { rotateY: 40 },
          ],
          flex: 1,
          width: 0.5,
          alignItems: 'center',
          flexDirection: 'column',
        }}
        source={{
          obj: asset('dino/dino.obj'),
          mtl: asset('dino/dino.mtl'),
        }}
      />
    );
  }
}
