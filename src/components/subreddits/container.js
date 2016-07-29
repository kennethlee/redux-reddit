import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchPopularSubs } from '../../actions';

class SubredditList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPopularSubs()
  }

  renderSubreddits() {
    return this.props.subreddits.map((sub) => {
      return <div>
              <h3>{sub.display_name}</h3>
             </div>
    });
  }

  render() {
    return (
      <div>
        {this.renderSubreddits()}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPopularSubs: fetchPopularSubs }, dispatch);
}

function mapStateToProps(state) {
  return {
    subreddits: state.subreddits,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SubredditList);
