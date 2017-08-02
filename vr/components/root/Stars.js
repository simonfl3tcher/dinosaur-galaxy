import React from 'react';
import PropTypes from 'prop-types';
import { View, Model, asset } from 'react-vr';
import { map, range, random } from 'lodash';
import styles from '../../styles/main';

const Star = () => {
  let pos1 = random(0, 10, true);
  let pos2 = random(0, 10, true);
  let pos3 = random(0, 20, true);

  return (
    <Model
      style={{
        transform: [
          { translate: [pos1 - 5, pos2 - 5, pos3 - 10] },
          { scale: 0.05 },
        ],
      }}
      source={{
        obj: asset('star/star.obj'),
        mtl: asset('star/star.mtl'),
      }}
    />
  );
};

const Stars = ({children}) => {
  return <View style={styles.welcomeScreen}>
    {map(range(0, 500), (value: number, index: number) =>
      <Star key={index} />
    )}
    {children}
  </View>;
};

Stars.propTypes = {
  children: PropTypes.node,
};

export default Stars;