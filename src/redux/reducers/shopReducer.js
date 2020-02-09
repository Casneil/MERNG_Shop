import { data } from "../../utils/_Data";
const initialState = data;

export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};
