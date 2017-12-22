import * as constantes from './Home.constants';

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constantes.INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true,
      };

    case constantes.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing,
      };

    case constantes.DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true,
      };

    case constantes.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing,
      };

    default:
      return state;
  }
};
