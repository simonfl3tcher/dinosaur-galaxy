// @flow

// React
import React, { Component } from 'react';
import { View, VrButton, Model, asset } from 'react-vr';

// Libs
import styles from '../styles/main';
import Score from './Score';
import Character from './Character';

import { map, range, random } from 'lodash';

export default class StartGame extends Component {
  props: {
    highestScore: number,
    startNewGame: Function
  };

  render() {
    let pos = random(0, 10, true);
    let pos2 = random(0, 10, true);
    return (
      <View style={styles.welcomeScreen}>
        {map(range(0, 500), (value: number, index: number) => {
          let pos1 = random(0, 10, true);
          let pos2 = random(0, 10, true);
          let pos3 = random(0, 20, true);
          return (
            <Model
              key={index}
              style={{
                transform: [
                  { translate: [pos1 - 5, pos2 - 5, pos3 - 10] },
                  { scale: 0.01 },
                ],
              }}
              source={{
                obj: asset('star/star.obj'),
                mtl: asset('star/star.mtl'),
              }}
            />
          );
        })}
        <Model
          style={{
            transform: [{ translate: [pos - 5, pos2 - 5, -1] }, { scale: 0.05 }],
          }}
          source={{
            obj: asset('sun/sun.obj'),
            mtl: asset('sun/sun.mtl'),
          }}
        />
        <Model
          style={{
            transform: [{ translate: [0, 1, -4] }, { scale: 0.03 }],
            flex: 1,
            width: 0.5,
            alignItems: 'center',
            flexDirection: 'column',
          }}
          source={{
            obj: asset('welcome/welcome.obj'),
            mtl: asset('welcome/welcome.mtl'),
          }}
        />
        <Score
          precedingTextModel="your-high-score"
          score={this.props.highestScore}
        />
        <Character />
        <VrButton onClick={() => this.props.startNewGame()}>
          <Model
            style={{
              transform: [{ translate: [0, 0, -3] }, { scale: 0.02 }],
              flex: 1,
              width: 0.5,
              alignItems: 'center',
              flexDirection: 'column',
            }}
            source={{
              obj: asset('start/start.obj'),
              mtl: asset('start/start.mtl'),
            }}
          />
        </VrButton>
      </View>
    );
  }
}
