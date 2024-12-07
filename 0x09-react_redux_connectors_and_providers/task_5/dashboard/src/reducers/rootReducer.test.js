// src/reducers/rootReducer.test.js
import { combineReducers } from 'redux';
import { Map } from 'immutable';
import courseReducer from './courseReducer';
import notificationReducer from './notificationReducer';
import uiReducer from './uiReducer';

// Root reducer creation
const rootReducer = combineReducers({
  courses: courseReducer,
  notifications: notificationReducer,
  ui: uiReducer,
});

describe('rootReducer', () => {
  it('should return the initial state', () => {
    const initialState = rootReducer(undefined, {});

    // Expected initial state structure
    const expectedState = {
      courses: Map(),
      notifications: Map(),
      ui: Map(),
    };

    expect(initialState).toEqual(expectedState);
  });
});

