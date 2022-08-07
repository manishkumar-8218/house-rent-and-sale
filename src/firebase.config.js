// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHGijR4j5jGnVzDXK6cpomxFY9Z4D-Cm8",
  authDomain: "hotel-a93d6.firebaseapp.com",
  projectId: "hotel-a93d6",
  storageBucket: "hotel-a93d6.appspot.com",
  messagingSenderId: "638036430008",
  appId: "1:638036430008:web:7b7711a040fd9cbe8c784d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
