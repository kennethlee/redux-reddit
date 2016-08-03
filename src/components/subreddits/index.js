import React from 'react';
import styles from '../../utils/styles';
import Radium from 'radium';

const activeSubreddit = (id, activeID) => {
  if (id === activeID) {
    return styles.active;
  } else {
    return {};
  }
}

const Subreddit = props => <li style={Object.assign({}, styles.subredditItem, activeSubreddit(props.id, props.activeID))}
                            onClick={ () => {
                              props.fetchPosts.call(this, props.url);
                              props.setActive.call(this, props.id);
                              props.setCurrentTitle.call(this, props.display, props.title)
                              }
                            }>
                            {props.display}
                        </li>

module.exports = Radium(Subreddit);
