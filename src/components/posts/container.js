import React, { Component } from 'react';
import { connect } from 'react-redux';

class Posts extends Component {
  constructor(props) {
    super(props);
  }

  renderPosts(posts) {
    return posts.map((post) => {
      return <div key={post.id}>{post.title}</div>
    });
  };

  render() {
    return (
      <div>{this.renderPosts(this.props.currentPosts)}</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentPosts: state.currentPosts,
  }
}

export default connect(mapStateToProps)(Posts);
