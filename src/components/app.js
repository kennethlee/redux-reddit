import React from 'react';
import SubredditList from './subreddits/container';
import styles from '../utils/styles';

import Posts from './posts/container';

export default () => {
  return (
    <div style={styles.appContainer}>
      <SubredditList />
      <Posts />
    </div>
  );
}
