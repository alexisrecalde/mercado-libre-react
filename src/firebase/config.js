import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCB1Cx5A9-L9PCeR3Jr3qRqNr18C5fu8bA",
  authDomain: "react-coderhouse-12533.firebaseapp.com",
  projectId: "react-coderhouse-12533",
  storageBucket: "react-coderhouse-12533.appspot.com",
  messagingSenderId: "333032631817",
  appId: "1:333032631817:web:f8779d73e27a3eef4792d8",
  measurementId: "G-KKTQ1KFGQN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
