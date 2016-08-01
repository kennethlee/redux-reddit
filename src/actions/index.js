import Client from '../utils/client';

export function fetchPopularSubs() {
  return dispatch => {
    return Client.fetchSubreddits()
      .then((response) => {
        dispatch(setPopularSubs(response))
      })
  }
}

export function setPopularSubs(response) {
  return {
    type: 'SET_SUBREDDITS',
    payload: response
  };
}

export function fetchPosts(url) {
  return dispatch => {
    return Client.fetchPosts(url)
      .then((response) => {
        dispatch(setPosts(response))
      });
  }
}

function setPosts(response) {
  return {
    type: 'SET_POSTS',
    payload: response,
  }
}

export function setActive(id) {
  return {
    type: 'SET_ACTIVE',
    payload: id,
  }
}

