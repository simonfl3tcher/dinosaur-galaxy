import { combineReducers } from 'redux';
import screens from './screens';
import game from './game';

const vrsaurusReducer = combineReducers({
  screens,
  game,
})

export default vrsaurusReducer;
