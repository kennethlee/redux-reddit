import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from '../../utils/styles';

import Subreddit from './';
import { fetchPopularSubs, fetchPosts, setActive } from '../../actions';

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
          title={sub.display_name}
          key={sub.id}
          id={sub.id}
          description={sub.public_description}
          url={sub.url}
          fetchPosts={this.props.fetchPosts}
          setActive={this.props.setActive}
          activeID={this.props.activeID}
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
    setActive: setActive },
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
