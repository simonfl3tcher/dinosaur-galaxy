import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, VrButton, asset, Model} from 'react-vr';
import styles from '../styles/main';
import { startNewGame } from '../actions';

class StartGame extends Component {
  props: {
    highestScore: number,
    startNewGame: Function
  };

  render() {
    return (
      <View style={styles.gameStyle}>
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

export default connect(
  null, { startNewGame })(StartGame);
