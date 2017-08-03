import React from 'react';
import PropTypes from 'prop-types';
import { View, Model, asset } from 'react-vr';
import { map, range, random, sample } from 'lodash';
import styles from '../../styles/main';

function generateNumbers() {
  let x = random(0, 15, true);
  let y = random(0, 15, true);
  let z = random(0, 25, true);

  const radius = 10;

  if (x * x + y * y + z * z < radius*radius) {
    return generateNumbers();
  } else {
    return [x, y, z];
  }
}

const Star = () => {
  let nums = generateNumbers();

  return (
    <Model
      style={{
        transform: [
          {
            translate: [
              sample([true, false]) ? nums[0] : -nums[0],
              sample([true, false]) ? nums[1] : -nums[1],
              sample([true, false]) ? nums[2] : -nums[2],
            ],
          },
          { scale: 0.05 },
        ],
      }}
      lit={true}
      source={{
        obj: asset('star/star.obj'),
        mtl: asset('star/star.mtl'),
      }}
    />
  );
};

const Stars = ({ children }) => {
  return (
    <View style={styles.welcomeScreen}>
      {map(range(0, 1000), (value: number, index: number) =>
        <Star key={index} />
      )}
      {children}
    </View>
  );
};

Stars.propTypes = {
  children: PropTypes.node,
};

export default Stars;
