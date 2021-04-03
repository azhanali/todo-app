// import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";

// var firebaseConfig = {
//   apiKey: "AIzaSyBj1gKbvyJ1jLNRWURMWAcsJdRIEJ3aIew",
//   authDomain: "todo-91c78.firebaseapp.com",
//   projectId: "todo-91c78",
//   storageBucket: "todo-91c78.appspot.com",
//   messagingSenderId: "547389414553",
//   appId: "1:547389414553:web:114704937388718ef8ac08"
// };

// firebase.initializeApp(firebaseConfig);
// firebase.firestore();

// export default firebase;


import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const app = firebase.initializeApp({
  apiKey: "AIzaSyBj1gKbvyJ1jLNRWURMWAcsJdRIEJ3aIew",
  authDomain: "todo-91c78.firebaseapp.com",
  projectId: "todo-91c78",
  storageBucket: "todo-91c78.appspot.com",
  messagingSenderId: "547389414553",
  appId: "1:547389414553:web:114704937388718ef8ac08"
});

export const auth = app.auth();
const db = app.firestore();
export default db;
