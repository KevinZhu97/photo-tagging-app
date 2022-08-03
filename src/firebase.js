import firebase from 'firebase/compat/app'
// import { initializeApp } from "firebase/app";
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAWiZ_8A8JIBFZ9FZ4GQbbnXf8q3dWVfwU",
  authDomain: "photo-tagging-app-29ff9.firebaseapp.com",
  projectId: "photo-tagging-app-29ff9",
  storageBucket: "photo-tagging-app-29ff9.appspot.com",
  messagingSenderId: "797033504537",
  appId: "1:797033504537:web:10c3ef2912a12c50adef88"
};

export const app = firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
