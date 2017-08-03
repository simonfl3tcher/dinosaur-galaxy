import React from 'react';
import { Model, VrButton, Animated, asset } from 'react-vr';

let AnimatedModel = Animated.createAnimatedComponent(Model);

export default class Character extends React.Component {
  props: {
    index: number,
    model: string,
    pickAnswer: Function
  };

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
    }).start(() => this.props.pickAnswer());
  }

  render() {
    return (
      <VrButton onClick={() => this.pickAnswer()}>
        <AnimatedModel
          style={{
            transform: [
              { translate: [this.props.index - 1, Math.abs(this.props.index - 3), -6] },
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
            obj: asset(
              `characters/${this.props.model}/${this.props.model}.obj`
            ),
            mtl: asset(`characters/${this.props.model}/${this.props.model}.mtl`),
            // obj: asset('characters/dino.obj'),
            // mtl: asset('characters/dino.mtl'),
          }}
        />
      </VrButton>
    );
  }
}
