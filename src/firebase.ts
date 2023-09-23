import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from "firebase/auth";
import { getFirestore, query, getDocs, collection, where, addDoc} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRc2xVOO9l4XW0v3pxLClnanwqFLweqiw",
  authDomain: "language-learn-4bc69.firebaseapp.com",
  databaseURL: "https://language-learn-4bc69-default-rtdb.firebaseio.com",
  projectId: "language-learn-4bc69",
  storageBucket: "language-learn-4bc69.appspot.com",
  messagingSenderId: "103501559212",
  appId: "1:103501559212:web:e523b14ee4cc7e20e6f609",
  measurementId: "G-GN4LYWLKCS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
    auth,
    db,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    addDoc,
    query,
    getDocs,
    collection,
    where,
};