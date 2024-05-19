// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaaiXJHdbS54YVstk7-fK02t2FswZFNog",
  authDomain: "miracle-project-d8513.firebaseapp.com",
  projectId: "miracle-project-d8513",
  storageBucket: "miracle-project-d8513.appspot.com",
  messagingSenderId: "701313467231",
  appId: "1:701313467231:web:0df02a202c400081cf6cea",
  measurementId: "G-PR7JJDP1LJ",
  databaseURL: 'https://miracle-project-d8513-default-rtdb.firebaseio.com',
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const auth = ""

export {db, auth}