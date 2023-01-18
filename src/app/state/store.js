import { useReducer } from 'react';
import { getCurrentTheme, saveThemeSelection } from '../theme/themes/helpers';
import * as actionTypes from './actions';
import { appReducer } from './reducer';

function useAppState() {
  const [state, dispatch] = useReducer(appReducer, {
    theme: getCurrentTheme(),
    list: [
      {
        id: `0`,
        name: 'Cigarets',
        value: 0,
      },
      {
        id: `1`,
        name: 'Coke',
        value: 0,
      },
    ],
  });

  function setState(type, value) {
    dispatch({ type, value });
  }

  function setTheme(value) {
    saveThemeSelection(value);
    setState(actionTypes.UPDATE_THEME_SELECTION, value);
  }

  function addNewCounter(value) {
    setState(actionTypes.ADD_NEW_COUNTER, value);
  }

  function updateCounters(value) {
    setState(actionTypes.UPDATE_COUNTERS, value);
  }

  return {
    state,
    setTheme,
    addNewCounter,
    updateCounters,
  };
}

export { useAppState };
