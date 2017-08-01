const screens = (state = { currentScreen: 'start' }, action) => {
  switch (action.type) {
    case 'START_NEW_GAME':
      return currentScreen(state, 'game');
    case 'WRONG_ANSWER':
      return currentScreen(state, 'gameover');
    case 'COMPLETED_IT':
      return currentScreen(state, 'completed');
    default:
      return state;
  }
};

const currentScreen = (state, screen) => (
  { ...state, currentScreen: screen }
);

export default screens;
