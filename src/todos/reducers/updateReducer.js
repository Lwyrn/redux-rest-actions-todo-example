import {createReducer} from '@reduxjs/toolkit';

import {initiate, error} from './reducerHelper';
import * as actions from '../actions';

const initialState = {
  pending: false,
  error: null
};

export default createReducer(initialState, {
  [actions.getTodo]: draft => {
    // For edit and delete actions, fetching the todo again
    // clears any previous error.
    draft.error = null;
  },
  // add a TODO
  [actions.addTodo]: draft => {
    initiate(draft);
  },
  [actions.addTodoSuccess]: draft => {
    draft.pending = false;
  },
  [actions.addTodoError]: (draft, action) => {
    error(draft, action);
  },
  // update a todo
  [actions.updateTodo]: draft => {
    initiate(draft);
  },
  [actions.updateTodoSuccess]: draft => {
    draft.pending = false;
  },
  [actions.updateTodoError]: (draft, action) => {
    error(draft, action);
  },
  // delete a todo
  [actions.deleteTodo]: draft => {
    initiate(draft);
  },
  [actions.deleteTodoSuccess]: draft => {
    draft.pending = false;
  },
  [actions.deleteTodoError]: (draft, action) => {
    error(draft, action);
  }
});
