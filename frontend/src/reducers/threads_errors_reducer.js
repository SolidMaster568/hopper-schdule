import { RECEIVE_THREAD, RECEIVE_NEW_THREAD, RECEIVE_THREAD_ERRORS, REMOVE_THREAD_ERRORS } from "../actions/thread_actions";

const _nullErrors = [];

const ThreadsErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  let newState = Object.assign([], state)
  switch (action.type) {
    case RECEIVE_THREAD_ERRORS:
      // newState.push(Object.values(action.errors))
      return Object.values(action.errors);
    case RECEIVE_NEW_THREAD:
      return _nullErrors;
    case RECEIVE_THREAD:
      return _nullErrors;
    case REMOVE_THREAD_ERRORS:
      return [];
    default:
      return state;
  }
};

export default ThreadsErrorsReducer;