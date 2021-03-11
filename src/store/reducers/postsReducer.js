import posts from "../../data/posts";

const initialstate = { posts };
function postsReducer(state = initialstate, action) {
  switch (action.type) {
    case "ADD_POST":
      return { ...state, posts: [...state.posts, action.payload] };
    default:
      return state;
  }
}
export default postsReducer;
