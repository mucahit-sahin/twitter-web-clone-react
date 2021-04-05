import {useState, useEffect} from "react";
import firebase from "../firebase";

const usePosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const createPost = ({
      id = Date.now(),
      username,
      displayName,
      userimage,
      text,
      sharedImage = "",
      date = new Date().getTime(),
    }) => {
      firebase.firestore().collection("posts")
        .add({
          id,
          username,
          displayName,
          userimage,
          text,
          sharedImage,
          date
        })
    }

    useEffect(() => {
      firebase.firestore().collection("posts")
        .orderBy("date")
        .onSnapshot(async (querySnapshot) => {
          const allPosts = []
          await querySnapshot.forEach((doc) => {
            allPosts.push(doc.data())
          });
          await setPosts(allPosts);
          return setLoading(false)

        });
    }, []);

    return [loading, posts, createPost];
};

export default usePosts;