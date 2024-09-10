import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAm17L8BKqfiMYdCc8IK_XqKbDpptI_WiU",
  authDomain: "subsum-252ac.firebaseapp.com",
  projectId: " subsum-252ac",
  storageBucket: "subsum-252ac.appspot.com",
  messagingSenderId: "708024221052",
  appId: "1:708024221052:web:158ddfdf6450b1812db8f9",
  measurementId: "G-C63RCCRT7Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
// import.meta.env.VITE_FIREBASE_API_KEY
// import.meta.env.VITE_FIREBASE_AUTH_DOMAIN
// import.meta.env.VITE_FIREBASE_PROJECT_ID
// import.meta.env.VITE_FIREBASE_STORAGE_BUCKET
// import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID
// import.meta.env.VITE_FIREBASE_APP_ID
// import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
