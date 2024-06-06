// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkdGmoRwM6y2WagT3g08SPfosAWO0JrZk",
  authDomain: "using-firabase.firebaseapp.com",
  projectId: "using-firabase",
  storageBucket: "using-firabase.appspot.com",
  messagingSenderId: "430543004520",
  appId: "1:430543004520:web:80161752423bb61c282cdd",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);