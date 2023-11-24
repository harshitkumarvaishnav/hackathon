// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcAOas93vkXBLIQurPS3DJ_oVwmO1UQ50",
  authDomain: "hackathon-af908.firebaseapp.com",
  projectId: "hackathon-af908",
  storageBucket: "hackathon-af908.appspot.com",
  messagingSenderId: "1094877426516",
  appId: "1:1094877426516:web:18cd1b770f0aa0895f0ec1",
  measurementId: "G-8MY2Y5NZ3H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);