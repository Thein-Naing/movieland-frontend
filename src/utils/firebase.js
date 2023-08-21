// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLlyHgh0MbP-VQqIiS85puQmb0DXL1w_8",
  authDomain: "movieland-9903d.firebaseapp.com",
  projectId: "movieland-9903d",
  storageBucket: "movieland-9903d.appspot.com",
  messagingSenderId: "431433559587",
  appId: "1:431433559587:web:c66c8c8216cad93ccd8b96",
  measurementId: "G-9X5DQJQ4WK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
