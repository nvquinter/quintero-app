// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdBRJ1gwtBwmlBQxcvLUfHyyG7jUthxPI",
  authDomain: "cursoreact-app.firebaseapp.com",
  projectId: "cursoreact-app",
  storageBucket: "cursoreact-app.appspot.com",
  messagingSenderId: "282079579587",
  appId: "1:282079579587:web:cd6b2527a899bf6dc74176"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore(app);
export const collectionProductos = collection (db, "productos")