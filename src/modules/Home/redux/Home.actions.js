import * as constants from './Home.constants';

export const increment = () => (dispatch) => {
  dispatch({
    type: constants.INCREMENT_REQUESTED,
  });

  dispatch({
    type: constants.INCREMENT,
  });
};

export const incrementAsync = () => (dispatch) => {
  dispatch({
    type: constants.INCREMENT_REQUESTED,
  });

  return setTimeout(() => {
    dispatch({
      type: constants.INCREMENT,
    });
  }, 3000);
};

export const decrement = () => (dispatch) => {
  dispatch({
    type: constants.DECREMENT_REQUESTED,
  });

  dispatch({
    type: constants.DECREMENT,
  });
};

export const decrementAsync = () => (dispatch) => {
  dispatch({
    type: constants.DECREMENT_REQUESTED,
  });

  return setTimeout(() => {
    dispatch({
      type: constants.DECREMENT,
    });
  }, 3000);
};
