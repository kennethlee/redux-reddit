import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from '../../utils/styles';

import Subreddit from './';
import { fetchPopularSubs, fetchPosts, setActive, setCurrentTitle } from '../../actions';

class SubredditList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPopularSubs()
  }

  renderSubreddits() {
    return this.props.subreddits.map((sub) => {
      return (
        <Subreddit
          fetchPosts={this.props.fetchPosts}
          setActive={this.props.setActive}
          setCurrentTitle={this.props.setCurrentTitle}
          key={sub.id}
          id={sub.id}
          activeID={this.props.activeID}
          display={sub.display_name}
          title={sub.title}
          description={sub.public_description}
          url={sub.url}
        />
      );
    });
  }

  render() {
    return (
      <ul style={styles.subredditsContainer}>
        {this.renderSubreddits()}
      </ul>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchPopularSubs: fetchPopularSubs,
    fetchPosts: fetchPosts,
    setActive: setActive,
    setCurrentTitle: setCurrentTitle },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    subreddits: state.subreddits,
    activeID: state.activeSubreddit,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SubredditList);
