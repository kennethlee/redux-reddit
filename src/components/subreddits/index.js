import React from 'react';
import styles from '../../utils/styles';

const activeSubreddit = (id, activeID) => {
  if (id === activeID) {
    return styles.active;
  } else {
    return {};
  }
}

export default props => <li style={Object.assign({}, styles.subredditItem, activeSubreddit(props.id, props.activeID))}
                            onClick={ () => {
                              props.fetchPosts.call(this, props.url);
                              props.setActive.call(this, props.id);
                              }
                            }>
                            {props.title}
                        </li>
