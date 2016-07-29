import React from 'react';

export default (props) => {
  return (
    <div onClick={props.fetchPosts.bind(this, props.url)}>
      <h3>{props.title}</h3>
    </div>
  );
}
