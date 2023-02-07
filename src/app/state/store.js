import { useEffect, useReducer } from 'react';
import { getCurrentTheme, saveThemeSelection } from '../theme/themes/helpers';
import * as actionTypes from './actions';
import { appReducer } from './reducer';

function useAppState() {
  const [state, dispatch] = useReducer(appReducer, {
    theme: getCurrentTheme(),
    list: [],
  });

  useEffect(() => {
    const counters = localStorage.getItem('counters');
    if (counters) {
      try {
        updateCounters(JSON.parse(counters));
      } catch (ex) {
        console.log(ex);
        localStorage.removeItem('counters');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      localStorage.setItem('counters', JSON.stringify(state.list));
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [state.list]);

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
