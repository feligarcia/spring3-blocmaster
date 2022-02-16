
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCElbnB9Wl9NGgrUK_BdRXwFlzL6yV9GMs",
  authDomain: "blockmasterf7.firebaseapp.com",
  projectId: "blockmasterf7",
  storageBucket: "blockmasterf7.appspot.com",
  messagingSenderId: "726833780568",
  appId: "1:726833780568:web:17862d14f7c9519bcff72d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()
const google = new GoogleAuthProvider()

export {
    app,
    google,
    db
}