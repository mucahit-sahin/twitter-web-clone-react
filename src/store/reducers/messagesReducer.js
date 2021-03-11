import messages from "../../data/messages";
const initialState = { messages };
function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_MESSAGE":
      var arr = [...state.messages];
      console.log(action.payload.fromto);
      var arr1 = arr.find((message) => message.fromto === action.payload.fromto)
        .messages;
      console.log(arr1);
      arr1.push({ message: action.payload.message, from: "mucahitsahin6" });
      return {
        ...state,
        messages: arr1,
      };
    default:
      return state;
  }
}
export default messagesReducer;
