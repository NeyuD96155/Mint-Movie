
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJFm0soRL14JJECIwInuH_DDtqMz-WuYM",
  authDomain: "mint-movie.firebaseapp.com",
  projectId: "mint-movie",
  storageBucket: "mint-movie.appspot.com",
  messagingSenderId: "541228151374",
  appId: "1:541228151374:web:24ffdadb6709337933891f",
  measurementId: "G-6K4M18D9DX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);