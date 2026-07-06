// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtYHzd4Hzj1krcFnR849Nuo-IHul84aHM",
  authDomain: "bahia-9f8e1.firebaseapp.com",
  projectId: "bahia-9f8e1",
  storageBucket: "bahia-9f8e1.firebasestorage.app",
  messagingSenderId: "453483653610",
  appId: "1:453483653610:web:729540fac06994e3172a93",
  measurementId: "G-WNGFM9R53C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
