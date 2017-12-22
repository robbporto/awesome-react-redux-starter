import * as constantes from './Home.constants';

export const increment = () => (dispatch) => {
  dispatch({
    type: constantes.INCREMENT_REQUESTED,
  });

  dispatch({
    type: constantes.INCREMENT,
  });
};

export const incrementAsync = () => (dispatch) => {
  dispatch({
    type: constantes.INCREMENT_REQUESTED,
  });

  return setTimeout(() => {
    dispatch({
      type: constantes.INCREMENT,
    });
  }, 3000);
};

export const decrement = () => (dispatch) => {
  dispatch({
    type: constantes.DECREMENT_REQUESTED,
  });

  dispatch({
    type: constantes.DECREMENT,
  });
};

export const decrementAsync = () => (dispatch) => {
  dispatch({
    type: constantes.DECREMENT_REQUESTED,
  });

  return setTimeout(() => {
    dispatch({
      type: constantes.DECREMENT,
    });
  }, 3000);
};
