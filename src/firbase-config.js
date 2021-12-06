// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0mPO61GLAsbTbAoLCyDLFIKrYzLNiz8Y",
  authDomain: "clone-42fc3.firebaseapp.com",
  projectId: "clone-42fc3",
  storageBucket: "clone-42fc3.appspot.com",
  messagingSenderId: "892767256466",
  appId: "1:892767256466:web:94da81cc3bc666269b4b4b",
  measurementId: "G-XM43V2BM22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
