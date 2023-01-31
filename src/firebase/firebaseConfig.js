
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
const { REACT_APP_NAME_FIREBASEAPI } = process.env

const firebaseConfig = {
  apiKey: `${REACT_APP_NAME_FIREBASEAPI}`,
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