import React from 'react';
import styles from '../../utils/styles';

export default (props) => {
  return (
    <tr>
      <th style={Object.assign({}, styles.postItem, styles.title)}>
        <div style={styles.display}>{props.display}</div>
        <span> - {props.title}</span>
      </th>
    </tr>
  )
}
