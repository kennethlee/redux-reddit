import React from 'react';
import styles from '../../utils/styles';

export default (props) => {
  return (
    <tr>
      <td style={styles.postItem}>
        {props.title}
      </td>
    </tr>
  )
}
