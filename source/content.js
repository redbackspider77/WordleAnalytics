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



// Select the node that will be observed for mutations
const targetNode = document.getElementById("ToastContainer-module_gameToaster__HPkaC");

// Options for the observer (which mutations to observe)
const config = { attributes: false, childList: true, subtree: false };

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
  for (const mutation of mutationList) {
    chrome.runtime.sendMessage({ type: "openSidePanel", url });
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

// Later, you can stop observing
observer.disconnect();
