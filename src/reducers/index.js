import { combineReducers } from 'redux';

import subredditsReducer from './reducer_subreddits';
import currentPostsReducer from './reducer_current_posts';
import activeSubredditReducer from './reducer_active_subreddit';
import displayTitleReducer from './reducer_display_title';

const rootReducer = combineReducers({
  subreddits: subredditsReducer,
  currentPosts: currentPostsReducer,
  activeSubreddit: activeSubredditReducer,
  displayTitle: displayTitleReducer,
});

export default rootReducer;
