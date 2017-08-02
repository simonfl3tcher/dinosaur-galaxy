// @flow

// React
import React, { Component } from 'react';
import { Model, VrButton, Animated, asset } from 'react-vr';

let AnimatedModel = Animated.createAnimatedComponent(Model);

export default class Character extends Component {
  state: {
    rotateValue: Object
  };

  constructor() {
    super();
    this.state = {
      rotateValue: new Animated.Value(40),
    };
  }

  rotate() {
    Animated.parallel([
      Animated.spring(this.state.rotateValue, {
        toValue: 400,
        tension: 1,
        friction: 10,
      }),
      Animated.timing(100, {
        // and twirl
        toValue: 360,
      }),
    ]).start();
    // We need to trigger the call to the pickAnswer prop here.
  }

  render() {
    return (
      <VrButton onClick={() => this.rotate()}>
        <AnimatedModel
          style={{
            transform: [
              { translate: [-5, -5, -4] },
              { scale: 0.03 },
              { rotateY: this.state.rotateValue },
              { rotateX: -35 },
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
      </VrButton>
    );
  }
}
