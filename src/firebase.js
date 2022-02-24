// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDEpXXxZ-2VbIuiH9ojZtkcqIjgA-aEA3w",
  authDomain: "clone-1ec4e.firebaseapp.com",
  projectId: "clone-1ec4e",
  storageBucket: "clone-1ec4e.appspot.com",
  messagingSenderId: "892952410274",
  appId: "1:892952410274:web:4fe5c27ae7801ed48dbffb",
  measurementId: "G-4D6R2MQXSY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
