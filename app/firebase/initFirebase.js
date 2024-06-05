// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkdGmoRwM6y2WagT3g08SPfosAWO0JrZk",
  authDomain: "using-firabase.firebaseapp.com",
  projectId: "using-firabase",
  storageBucket: "using-firabase.appspot.com",
  messagingSenderId: "430543004520",
  appId: "1:430543004520:web:80161752423bb61c282cdd",
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;