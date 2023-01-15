// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyBsJ1wIlZkg5nLViyRn5mA5t-296Knfqtg",
    authDomain: "apple0-5538e.firebaseapp.com",
    projectId: "apple0-5538e",
    storageBucket: "apple0-5538e.appspot.com",
    messagingSenderId: "513171008257",
    appId: "1:513171008257:web:7eeeb239fccddb38318900",
    measurementId: "G-MZX4N7JGVG"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export { app, auth }