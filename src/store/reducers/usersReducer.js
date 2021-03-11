import users from "../../data/users";

const initialState = { users };
function usersReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
export default usersReducer;
