// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnNUSxeI3V8m8mH-ZAZuW_N_EHipEy4NE",
  authDomain: "wordleanalytics-94a4b.firebaseapp.com",
  projectId: "wordleanalytics-94a4b",
  storageBucket: "wordleanalytics-94a4b.firebasestorage.app",
  messagingSenderId: "34017571752",
  appId: "1:34017571752:web:a9f5874201d5e1fccda39d",
  measurementId: "G-7RSS026EKQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);