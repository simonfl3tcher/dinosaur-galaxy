import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, VrButton, Model, asset } from 'react-vr';
import { startNewGame } from '../actions';

class GameOver extends Component {
  props: {
    score: number,
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
              transform: [{ translate: [0, -1.5, -5] }, { scale: 0.02 }],
              flex: 1,
              width: 0.5,
              alignItems: 'center',
              flexDirection: 'column',
            }}
            lit={true}
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
