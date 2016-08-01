import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './';
import styles from '../../utils/styles';
import DisplayTitle from './displayTitle';

class Posts extends Component {
  constructor(props) {
    super(props);
  }

  renderTitle(displayTitle) {
    if (displayTitle.display) {
      return <DisplayTitle display={this.props.displayTitle.display}
                           title={this.props.displayTitle.title} />
    }
  }

  renderPosts(posts) {
    return posts.map((post) => {
      return <Post key={post.id}
                   title={post.title}
                   url={post.permalink}
             />
    });
  };

  render() {
    return (
      <table>
        <thead>
          {this.renderTitle(this.props.displayTitle)}
        </thead>
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
    displayTitle: state.displayTitle,
  }
}

export default connect(mapStateToProps)(Posts);
