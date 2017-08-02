import React from 'react';
import { Model, VrButton, Animated, asset } from 'react-vr';
import { random } from 'lodash';

let AnimatedModel = Animated.createAnimatedComponent(Model);

export default class Character extends React.Component {
  props: {
    index: number,
    model: string,
    pickAnswer: Function,
  }

  constructor() {
    super();
    this.state = {
      rotateValue: new Animated.Value(0),
    };
  }

  pickAnswer() {
    Animated.spring(this.state.rotateValue, {
      toValue: 400,
      tension: 2,
    }).start( () => this.props.pickAnswer() );
  }

  render() {
    let pos1 = random(2, 6, true) * (Math.random() < 0.5 ? -1 : 1);
    let pos2 = random(2, 4, true) * (Math.random() < 0.5 ? -1 : 1) + 2;
    let pos3 = random(4, 7, true) * (Math.random() < 0.5 ? -1 : 1);

    return (
      <VrButton onClick={() => this.pickAnswer()}>
        <AnimatedModel
          style={{
            transform: [
              { translate: [pos1, pos2, pos3] },
              { scale: 0.03 },
              { rotateY: this.state.rotateValue },
              { rotateX: 0 },
            ],
            flex: 1,
            width: 0.5,
            alignItems: 'center',
            flexDirection: 'column',
          }}
          source={{
            //obj: asset('characters/' + this.props.model + '.obj'),
            //mtl: asset('characters/' + this.props.model + 'dino.mtl'),
            obj: asset('characters/dino.obj'),
            mtl: asset('characters/dino.mtl'),
          }}
        />
      </VrButton>
    );
  }
}