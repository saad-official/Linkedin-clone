import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBDoNrphIrhF6wlt5QZNv8BQUyLNyvUue4",
  authDomain: "linkedin-70cda.firebaseapp.com",
  projectId: "linkedin-70cda",
  storageBucket: "linkedin-70cda.appspot.com",
  messagingSenderId: "1081528831183",
  appId: "1:1081528831183:web:06b7b003c40e5de9f67bba",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
   const storage = getStorage(firebaseApp);
// const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, storage };
// export default db;
