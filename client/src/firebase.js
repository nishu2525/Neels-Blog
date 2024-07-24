// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "neel-blog-8bdcc.firebaseapp.com",
  projectId: "neel-blog-8bdcc",
  storageBucket: "neel-blog-8bdcc.appspot.com",
  messagingSenderId: "117630629868",
  appId: "1:117630629868:web:90e59778f327ed322472c9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
