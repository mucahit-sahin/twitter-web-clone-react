import posts from "../../data/posts";

const initialstate = { posts };
function postsReducer(state = initialstate, action) {
  switch (action.type) {
    case "ADD_POST":
      var arr = [...state.posts];
      arr.unshift(action.payload);
      return { ...state, posts: arr };
    default:
      return state;
  }
}
export default postsReducer;
