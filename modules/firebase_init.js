// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAnkn0nI7TKtAnouSwDpITRRpknMRRaos",
  authDomain: "parcial-9fc96.firebaseapp.com",
  projectId: "parcial-9fc96",
  storageBucket: "parcial-9fc96.firebasestorage.app",
  messagingSenderId: "899591959379",
  appId: "1:899591959379:web:1a86464bfc0582bee527a6",
  measurementId: "G-2G60X9Y7H3"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db };