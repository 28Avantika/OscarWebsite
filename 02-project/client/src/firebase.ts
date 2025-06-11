import { initializeApp } from "firebase/app";
import { 
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
  linkWithCredential,
  EmailAuthProvider,
  //AuthCredential
} from 'firebase/auth';
import { doc, getFirestore, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjFVIDObpxavjhhLNRN64D5SlZqTmsgfc",
  authDomain: "oscar-cafe.firebaseapp.com",
  projectId: "oscar-cafe",
  storageBucket: "oscar-cafe.appspot.com",
  messagingSenderId: "177465229303",
  appId: "1:177465229303:web:786b1f91251f7796aef8f2",
  measurementId: "G-Z2M8F1EL71"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

// Set additional Google OAuth parameters
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

// Utility function for Google sign-in
const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    // Check if user already exists in Firestore
    const userDoc = await getDoc(doc(db, "users", user.uid));
    
    if (!userDoc.exists()) {
      // Store user in Firestore if new
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        phoneNumber: user.phoneNumber || '',
        provider: 'google',
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    return user;
  } catch (error: any) {
    if (error.code === 'auth/account-exists-with-different-credential') {
      // Handle account linking
      const email = error.customData?.email;
      if (email) {
        throw new Error('This email is already registered with a different method. Please login with your password to link accounts.');
      }
    }
    throw error;
  }
};

// Enhanced email/password sign up
const signUpWithEmail = async (email: string, password: string, name: string, phone: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    // Update user profile
    if (name) {
      await updateProfile(userCredential.user, {
        displayName: name
      });
    }

    // Store additional user data in Firestore
    await setDoc(doc(db, "users", userCredential.user.uid), {
      uid: userCredential.user.uid,
      email: email,
      displayName: name,
      phoneNumber: phone,
      provider: 'email',
      createdAt: new Date(),
      updatedAt: new Date()
    });

    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export { 
  auth, 
  db,
  signInWithGoogle,
  signUpWithEmail,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  EmailAuthProvider,
  linkWithCredential
};