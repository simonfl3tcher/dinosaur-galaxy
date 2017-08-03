import questions from '../data/questions.json';

export const startNewGame = () => {
  return {
    type: 'START_NEW_GAME',
    screen: 'game',
  };
};

export const loadQuestions = () => {
  return {
    type: 'QUESTIONS_LOADED',
    questions: questions,
  };
};

export const pickAnswer = answer => (dispatch, getState) => {
  const question = getState().game.currentQuestion;
  const outstandingQuestions = getState().game.outstandingQuestions;

  if (checkAnswer(question, answer)) {
    if (outstandingQuestions.length > 0) {
      dispatch(correctAnswer());
      dispatch(nextQuestion());
    } else {
      dispatch(completedIt());
    }
  } else {
    // Move on to next question
    dispatch(nextQuestion());
  }
};

const checkAnswer = (question, answer) => {
  return answer == question.correct_answer;
};

export const correctAnswer = () => {
  return {
    type: 'CORRECT_ANSWER',
  };
};

export const nextQuestion = () => {
  return {
    type: 'NEXT_QUESTION',
  };
};

export const completedIt = () => {
  return {
    type: 'COMPLETED_IT',
  };
};
