// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase/app";
// import "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBD4CyQHEfDBKeTp_O8LQ1V8hqhIt0-ywI",
  authDomain: "divyanshu-yt-frontend.firebaseapp.com",
  projectId: "divyanshu-yt-frontend",
  storageBucket: "divyanshu-yt-frontend.appspot.com",
  messagingSenderId: "493279833641",
  appId: "1:493279833641:web:f6b5738e9c8ca313013638",
  measurementId: "G-MYD538JNNB",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
// firebase.initializeApp(firebaseConfig);

// export default firebase.auth();
