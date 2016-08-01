import React from 'react';
import styles from '../../utils/styles';

export default (props) => {
  return (
    <tr>
      <td style={styles.postItem}>
        <a style={styles.link}
          target="_blank"
          href={`http://reddit.com${props.url}`}>
          {props.title}
        </a>
      </td>
    </tr>
  )
}
