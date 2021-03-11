import messages from "../../data/messages";
const initialState = { messages };
function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_MESSAGE":
      const arr = [...state.messages];
      const messages = arr.filter(
        (message) => message.messages === action.payload.fromto
      );
      messages.messages.push(action.payload.message);
      return {
        ...state,
        messages: messages,
      };
    default:
      return state;
  }
}
export default messagesReducer;
