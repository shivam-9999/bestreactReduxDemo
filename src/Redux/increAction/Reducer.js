import { INCREMENT } from "./Type";
import { DECREMENT } from "./Type";

const initialState = {
  count: 0,
};

export const reducer = (state = initialState, action) => {

  console.log("ahah",action)

  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};
