// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTW1glOVr8IfBaSIbXTUFh_wmnEF8phoo",
  authDomain: "netflixgpt-6457b.firebaseapp.com",
  projectId: "netflixgpt-6457b",
  storageBucket: "netflixgpt-6457b.firebasestorage.app",
  messagingSenderId: "965723039916",
  appId: "1:965723039916:web:b18adff36b3bd09b1bd709",
  measurementId: "G-5S8LCWCZ7P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();