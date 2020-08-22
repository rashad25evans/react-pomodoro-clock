import { INCREMENT, DECREMENT, START } from "./types"



export default (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        sessionLength: state.sessionLength + 1,
        breakLength: state.breakLength
      };
    case DECREMENT:
      return {
        sessionLength: state.sessionLength - 1,
        breakLength: state.breakLength
      };
    case START:
      return 0
    default:
      return state;
  }
}


