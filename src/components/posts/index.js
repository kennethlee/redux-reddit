import React from 'react';
import styles from '../../utils/styles';

// export default props => <li key={props.key}><p>{props.title}</p></li>
export default (props) => {
  return (
    <tr key={props.key}>
      <td style={styles.postItem}>
        {props.title}
      </td>
    </tr>
  )
}
