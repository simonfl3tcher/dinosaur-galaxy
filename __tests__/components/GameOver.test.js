import 'react-native';
import 'react-vr';
import React from 'react';
import GameOver from '../../vr/components/GameOver.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<GameOver />).toJSON();
  expect(tree).toMatchSnapshot();
});
