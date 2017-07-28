import 'react-native';
import 'react-vr';
import React from 'react';
import Game from '../../vr/components/Game.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const question = {
    question: 'example?',
    answers: {
      a: 'a',
      b: 'b',
      c: 'b',
    },
    answer: 'a',
  };

  const tree = renderer
    .create(<Game score={0} highestScore={0} question={question} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
