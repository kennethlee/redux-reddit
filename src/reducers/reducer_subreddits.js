export default function(state = [], action) {
  switch (action.type) {
    case 'SET_SUBREDDITS':
      return action.payload
      break;
    default:
      return state;
  }
}
