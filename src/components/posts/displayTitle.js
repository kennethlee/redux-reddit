import React from 'react';
import styles from '../../utils/styles';

export default (props) => {
  return (
    <tr>
      <th style={styles.postItem}>
        <div style={styles.display}>{props.display}</div>
        <span> - {props.title}</span>
      </th>
    </tr>
  )
}
