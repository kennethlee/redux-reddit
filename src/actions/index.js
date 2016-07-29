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
