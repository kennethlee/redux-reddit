import React from 'react';
import styles from '../../utils/styles';

export default props => <li style={styles.subredditItem}
                            key={props.key}
                            onClick={props.fetchPosts.bind(this, props.url)}>
                            {props.title}
                        </li>
