import { combineReducers } from 'redux';

import subredditsReducer from './reducer_subreddits';

const rootReducer = combineReducers({
  subreddits: subredditsReducer,
});

export default rootReducer;
