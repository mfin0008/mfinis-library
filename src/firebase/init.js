// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqTQQLMG6OpssNoLPC2gy4WByZ3792ygQ",
  authDomain: "week7-matthew.firebaseapp.com",
  projectId: "week7-matthew",
  storageBucket: "week7-matthew.firebasestorage.app",
  messagingSenderId: "441272146999",
  appId: "1:441272146999:web:bc28739cf85b8a2f49b3b2"
};

// Initialize Firebase
initializeApp(firebaseConfig);

import { getFirestore } from 'firebase/firestore';
const db = getFirestore();
export default db;
