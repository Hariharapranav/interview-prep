
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB0bcaaQ0qVmqnodX3Xl5tEbuD0jh52aeo",
  authDomain: "prepwise-3344c.firebaseapp.com",
  projectId: "prepwise-3344c",
  storageBucket: "prepwise-3344c.firebasestorage.app",
  messagingSenderId: "1076410400388",
  appId: "1:1076410400388:web:3bd10442dc9de86b770cd1",
  measurementId: "G-Z9VYGER11F"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);