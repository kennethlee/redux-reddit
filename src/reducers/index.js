import { combineReducers } from 'redux';

import subredditsReducer from './reducer_subreddits';

const rootReducer = combineReducers({
  subReddits: subredditsReducer,
});

export default rootReducer;
