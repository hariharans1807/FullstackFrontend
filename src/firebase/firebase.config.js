// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA428O_CPCb7l7VxZvobeCWwDNLrhlMhQ8",
  authDomain: "foodi-client-part5-5c26d.firebaseapp.com",
  projectId: "foodi-client-part5-5c26d",
  storageBucket: "foodi-client-part5-5c26d.appspot.com",
  messagingSenderId: "879534902891",
  appId: "1:879534902891:web:9b915fb375cf046add2b2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;