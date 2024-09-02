// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAm17L8BKqfiMYdCc8IK_XqKbDpptI_WiU",
  authDomain: "subsum-252ac.firebaseapp.com",
  projectId: "subsum-252ac",
  storageBucket: "subsum-252ac.appspot.com",
  messagingSenderId: "708024221052",
  appId: "1:708024221052:web:158ddfdf6450b1812db8f9",
  measurementId: "G-C63RCCRT7Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);