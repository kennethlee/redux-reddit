import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './';
import styles from '../../utils/styles';

class Posts extends Component {
  constructor(props) {
    super(props);
  }

  renderPosts(posts) {
    return posts.map((post) => {
      return <Post key={post.id}
                   title={post.title}
             />
    });
  };

  render() {
    return (
      // <ul style={styles.postsContainer}>
      //   {this.renderPosts(this.props.currentPosts)}
      // </ul>
      <table>
        <tbody>
          {this.renderPosts(this.props.currentPosts)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentPosts: state.currentPosts,
  }
}

export default connect(mapStateToProps)(Posts);
