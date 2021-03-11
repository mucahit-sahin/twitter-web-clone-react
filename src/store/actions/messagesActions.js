export const addMessageAction = (message, fromto) => ({
  type: "ADD_MESSAGE",
  payload: { message, fromto },
});
