// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider,signInWithPopup  } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
           
  apiKey: "AIzaSyBjFVIDObpxavjhhLNRN64D5SlZqTmsgfc",
  authDomain: "oscar-cafe.firebaseapp.com",
  projectId: "oscar-cafe",
  storageBucket: "oscar-cafe.firebasestorage.app",
  messagingSenderId: "177465229303",
  appId: "1:177465229303:web:786b1f91251f7796aef8f2",
  measurementId: "G-Z2M8F1EL71"
};

// Initialize Firebase
export const googleProvider = new GoogleAuthProvider();
// Utility function for Google sign-in
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Error signing in with Google:", error);
    throw error;
  }
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
//const analytics = getAnalytics(app);
export const db = getFirestore(app); 
// For development only
if (import.meta.env.DEV) {
  connectFirestoreEmulator(db, 'localhost', 8080);
}


export { auth };