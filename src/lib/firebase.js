import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"

const config = {
    apiKey: "AIzaSyCRWDq1XuV_n2JsXWfWATy8a8by1ehpSmM",
    authDomain: "twitter-fff07.firebaseapp.com",
    projectId: "twitter-fff07",
    storageBucket: "twitter-fff07.appspot.com",
    messagingSenderId: "401125028425",
    appId: "1:401125028425:web:248339c39c4ec803e04598",
    measurementId: "G-MDDK6X38LL"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

export default firebase