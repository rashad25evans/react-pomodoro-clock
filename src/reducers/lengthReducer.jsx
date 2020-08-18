import { INCREMENT, DECREMENT } from "./types"

export default (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        sessionLength: state.sessionLength + 1
      };
    case DECREMENT:
      return {
        sessionLength: state.sessionLength - 1
      };
    default:
      return state;
  }
}