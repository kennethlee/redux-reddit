import { combineReducers } from 'redux';

import subredditsReducer from './reducer_subreddits';
import currentPostsReducer from './reducer_current_posts';

const rootReducer = combineReducers({
  subreddits: subredditsReducer,
  currentPosts: currentPostsReducer,
});

export default rootReducer;
