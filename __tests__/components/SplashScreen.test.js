import 'react-native';
import 'react-vr';
import React from 'react';
import SplashScreen from '../../vr/components/SplashScreen.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<SplashScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
