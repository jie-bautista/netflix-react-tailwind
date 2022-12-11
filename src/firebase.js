// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMAFioFhFl90Yb4_6I8rj0tivGS2Qrhjk",
  authDomain: "flixster-a391c.firebaseapp.com",
  projectId: "flixster-a391c",
  storageBucket: "flixster-a391c.appspot.com",
  messagingSenderId: "69923768592",
  appId: "1:69923768592:web:f90231af7a78d3b1e5bd95",
  measurementId: "G-KW9FVBS44D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app)