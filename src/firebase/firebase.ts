// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import getEnvVar from "../utils/getEnvVar";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: getEnvVar("VITE_API_GOOGLE_KEY"),
  authDomain: "learnlingo-dk.firebaseapp.com",
  databaseURL:
    "https://learnlingo-dk-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "learnlingo-dk",
  storageBucket: "learnlingo-dk.firebasestorage.app",
  messagingSenderId: "515441206744",
  appId: "1:515441206744:web:054e170dac5a245994bead",
  measurementId: "G-K66HWFVWNK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };
