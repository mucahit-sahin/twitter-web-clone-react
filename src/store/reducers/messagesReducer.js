import messages from "../../data/messages";
const initialState = { messages };
function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_MESSAGE":
      var arr = [...state.messages];
      arr
        .find((message) => message.fromto === action.payload.fromto)
        .messages.push({
          message: action.payload.message,
          from: "mucahitsahin6",
        });
      return {
        ...state,
        messages: arr,
      };
    default:
      return state;
  }
}
export default messagesReducer;
