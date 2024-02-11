// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIrqjjpXJdsVeZCH0A5hgQ27XTNAE2pG0",
  authDomain: "auth-firebase-context-ta-f6b5a.firebaseapp.com",
  projectId: "auth-firebase-context-ta-f6b5a",
  storageBucket: "auth-firebase-context-ta-f6b5a.appspot.com",
  messagingSenderId: "85514400926",
  appId: "1:85514400926:web:7c8c1384591677473df78f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;