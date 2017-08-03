import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, VrButton, Model, asset } from 'react-vr';
import styles from '../styles/main';
import { startNewGame } from '../actions';

class GameOver extends Component {
  props: {
    score: number,
    startNewGame: Function
  };

  render() {
    return (
      <View>
        <VrButton onClick={() => this.props.startNewGame()}>
          <Model
            style={{
              transform: [{ translate: [0, 0, -4] }, { scale: 0.02 }],
              flex: 1,
              width: 0.5,
              alignItems: 'center',
              flexDirection: 'column',
            }}
            source={{
              obj: asset('tryagain/tryagain.obj'),
              mtl: asset('tryagain/tryagain.mtl'),
            }}
          />
        </VrButton>
      </View>
    );
  }
}

export default connect(state => ({ score: state.game.score }), {
  startNewGame,
})(GameOver);
