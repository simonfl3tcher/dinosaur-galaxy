// @flow

import { StyleSheet } from 'react-vr';

export default StyleSheet.create({
  gameStyle: {
    transform: [{ translate: [-2.25, 0, 0] }],
  },
  welcomeScreen: {
    transform: [{ translate: [-0.2, 0, 0] }],
  },
  text: {
    fontSize: 0.2,
    textAlign: 'center',
    color: '#fff',
    transform: [{ translate: [0, 2, -5] }],
  },
  gameOverText: {
    fontSize: 0.2,
    textAlign: 'center',
    color: '#fff',
    transform: [{ translate: [0, 0, -5] }],
  },
  button: {
    backgroundColor: '#fff',
    transform: [{ translate: [0, 2, -5] }],
  },
  buttonText: {
    fontSize: 0.2,
    textAlign: 'center',
    color: '#000',
  },
  questionBlock: {
    fontSize: 0.5,
    textAlign: 'center',
    color: '#000',
    backgroundColor: '#fff',
    transform: [{ translate: [0, -1, -5] }],
  },
  startButton: {},
});
