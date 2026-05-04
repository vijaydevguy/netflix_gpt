// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCbZ-SGn8JuiZ8Jhh0fMbfHMqrYULQTCvw",
  authDomain: "netflixgpt-33e2b.firebaseapp.com",
  projectId: "netflixgpt-33e2b",
  storageBucket: "netflixgpt-33e2b.firebasestorage.app",
  messagingSenderId: "472170655867",
  appId: "1:472170655867:web:8db84bc3ebda50caf372de",
  measurementId: "G-C2MQN305F7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
const db = getFirestore(app);
