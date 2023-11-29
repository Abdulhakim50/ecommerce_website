// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfwUXNnDRwPeQrubzuUbLYCxAZIjPPpSw",
  authDomain: "ecommerce-38591.firebaseapp.com",
  projectId: "ecommerce-38591",
  storageBucket: "ecommerce-38591.appspot.com",
  messagingSenderId: "762485610434",
  appId: "1:762485610434:web:f483ef3814c16f1ed2685b",
  measurementId: "G-QM57WYC31K"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp