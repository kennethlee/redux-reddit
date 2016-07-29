import React, { Component } from 'react';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchPopularSubs } from '../actions';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPopularSubs()
  }

  renderSubreddits() {
    console.log("IN RENDER ", this.props.subreddits)
    return this.props.subreddits.map((sub) => {
      return <div>
              <h3>{sub.display_name}</h3>
            </div>
    });
  }

  render() {
    return (<div>
      {this.renderSubreddits()}
    </div>);
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
