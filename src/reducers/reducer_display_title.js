export default function(state = {}, action) {
  switch (action.type) {
    case "SET_TITLE":
      return action.payload;
    default:
      return state;
  }
}
