// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgh-dELD30PIKGU1LWwbjC92yf42u5v-c",
  authDomain: "test-45e4f.firebaseapp.com",
  projectId: "test-45e4f",
  storageBucket: "test-45e4f.appspot.com",
  messagingSenderId: "971667789887",
  appId: "1:971667789887:web:dec6e9fdeebf885682408a",
  measurementId: "G-9T4JNYZDLC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const storage = getStorage(app);
export const database = getFirestore(app);