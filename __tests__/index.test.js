import 'react-native';
import 'react-vr';
import React from 'react';
import Index from '../index.vr.js';
import MockStorage from './__support__/MockStorage';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

beforeAll(() => {
  const storageCache = {};
  const AsyncStorage = new MockStorage(storageCache);

  jest.setMock('AsyncStorage', AsyncStorage);
});

test('renders correctly', () => {
  const tree = renderer.create(<Index />).toJSON();
  expect(tree).toMatchSnapshot();
});
