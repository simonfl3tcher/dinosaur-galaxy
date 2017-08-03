import React from 'react';
import { Model, VrButton, Animated, asset } from 'react-vr';
import { random, sample } from 'lodash';

let AnimatedModel = Animated.createAnimatedComponent(Model);

const generateNumbers = () => {
  let x = random(0, 10, true);
  let y = random(0, 4, true);
  let z = random(0, 10, true);

  const radiusMin = 6;
  const radiusMax = 10;

  const tmp = x * x + y * y + z * z;

  if ( tmp < radiusMin*radiusMin || tmp > radiusMax*radiusMax) {
    return generateNumbers();
  } else {
    return [sample([true, false]) ? x : -x,
     sample([true, false]) ? y : -y,
     sample([true, false]) ? z : -z];
  }
}

export default class Character extends React.Component {
  props: {
    index: number,
    model: string,
    pickAnswer: Function
  };

  pickAnswer(rotateValue, rotY) {
    Animated.spring(rotateValue, {
      toValue: rotY + 360,
      tension: 2,
    }).start(() => this.props.pickAnswer());
  }

  render() {
    console.log('dino', this.props.index);
    let [x, y, z] = generateNumbers();

    // TODO: let rotX = Math.atan2(y, Math.abs(z)) * (180 / Math.PI);
    let rotY = - Math.atan2(x, -z) * (180 / Math.PI);

    const rotateValue = new Animated.Value(Math.round(rotY));

    return (
      <VrButton onClick={() => this.pickAnswer(rotateValue, rotY)}>
        <AnimatedModel
          style={{
            transform: [
              { translate: [x, y, z] },
              { rotateX: 0 },
              { rotateY: rotateValue },
              { scale: 0.03 },
            ],
          }}
          source={{
            obj: asset(
              `characters/${this.props.model}/${this.props.model}.obj`
            ),
            mtl: asset(`characters/${this.props.model}/${this.props.model}.mtl`),
          }}

        />
      </VrButton>
    );
  }
}
