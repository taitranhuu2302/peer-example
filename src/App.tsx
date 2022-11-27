import React from "react";
import HomePage from "./pages/Home";
import "./App.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB954LGWhcU2JNVmD-gJ06PRZUMwOgQQU",
  authDomain: "talking-dev-b1361.firebaseapp.com",
  projectId: "talking-dev-b1361",
  storageBucket: "talking-dev-b1361.appspot.com",
  messagingSenderId: "961534630633",
  appId: "1:961534630633:web:9d1a953ad59a9e388a2e78",
  measurementId: "G-WD43YMZKXD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const App = () => {
  return (
    <>
      <HomePage />
    </>
  );
};

export default App;
