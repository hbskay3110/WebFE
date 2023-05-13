// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPpn-kWYs2amQShAZj6B9yUfgQympsPAs",
  authDomain: "webfe-f6570.firebaseapp.com",
  projectId: "webfe-f6570",
  storageBucket: "webfe-f6570.appspot.com",
  messagingSenderId: "786012601326",
  appId: "1:786012601326:web:fb56b2e84b7cbd3910acff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default firebaseConfig