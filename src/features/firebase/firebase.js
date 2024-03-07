import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBx3lkTzGBbnEcynHkbJU-5PHhKUKl7oj8",
  authDomain: "react-app-6ad25.firebaseapp.com",
  projectId: "react-app-6ad25",
  storageBucket: "react-app-6ad25.appspot.com",
  messagingSenderId: "30124081126",
  appId: "1:30124081126:web:8fdc94946bef24232d6027",
  measurementId: "G-62QRL4X8T3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); 
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth, db};