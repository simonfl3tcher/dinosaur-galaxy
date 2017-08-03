import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, VrButton, asset, Model } from 'react-vr';
import styles from '../styles/main';
import { startNewGame } from '../actions';

class StartGame extends Component {
  props: {
    highestScore: number,
    startNewGame: Function
  };

  render() {
    return (
      <View>
        <Model
          style={{
            transform: [{ translate: [0, 0, -4] }, { scale: 0.02 }],
            flex: 1,
            width: 0.5,
            alignItems: 'center',
            flexDirection: 'column',
          }}
          lit={true}
          source={{
            obj: asset('dinosaurgalaxy/dinosaurgalaxy.obj'),
            mtl: asset('dinosaurgalaxy/dinosaurgalaxy.mtl'),
          }}
        />

        <VrButton onClick={() => this.props.startNewGame()}>
          <Model
            style={{
              transform: [{ translate: [0, -1.5, -3] }, { scale: 0.02 }],
              flex: 1,
              width: 0.5,
              alignItems: 'center',
              flexDirection: 'column',
            }}
            lit={true}
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

export default connect(null, { startNewGame })(StartGame);
