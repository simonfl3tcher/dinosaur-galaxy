const defaultState = {
  score: 0,
  outstandingQuestions: [],
  currentQuestion: null,
};

const game = (state = defaultState, action) => {
  switch (action.type) {
    case 'START_NEW_GAME':
      return defaultState;
    case 'QUESTIONS_LOADED':
      return {
        ...state,
        currentQuestion: action.questions[0],
        outstandingQuestions: action.questions.slice(1),
      };
    case 'CORRECT_ANSWER':
      return {
        ...state,
        score: state.score + 1,
      };
    case 'NEXT_QUESTION':
      return {
        ...state,
        currentQuestion: state.outstandingQuestions[0],
        outstandingQuestions: state.outstandingQuestions.slice(1),
      };
    default:
      return state;
  }
};

export default game;
