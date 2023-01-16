import * as actionTypes from './actions';

function appReducer(state, { type, value }) {
  switch (type) {
    case actionTypes.UPDATE_THEME_SELECTION:
      return {
        ...state,
        theme: value,
      };
    case actionTypes.ADD_NEW_COUNTER:
      return {
        ...state,
        list: [...state.list, value],
      };
    default:
      return state;
  }
}

export { appReducer };
