import 'react-native';
import 'react-vr';
import React from 'react';
import CompletedIt from '../../vr/components/CompletedIt.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<CompletedIt />).toJSON();
  expect(tree).toMatchSnapshot();
});
