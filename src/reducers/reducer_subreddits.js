import Client from '../utils/Client';

export default function(state = {}, action) {
  switch (action.type) {
    case 'SET_SUBREDDITS':
      return Client.fetchSubreddits();
      break;
    default:
      return state;
  }
}
