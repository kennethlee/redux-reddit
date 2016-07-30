import React from 'react';
import SubredditList from './subreddits/container';

import Posts from './posts/container';

export default () => {
  return (
    <div>
      <SubredditList />
      <Posts />
    </div>
  );
}
