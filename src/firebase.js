// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCwK1M-mnWLfBopW6LL6uGFsE8Z8PH1OAE",
  authDomain: "ertertert-bfec8.firebaseapp.com",
  projectId: "ertertert-bfec8",
  storageBucket: "ertertert-bfec8.appspot.com",
  messagingSenderId: "397954477760",
  appId: "1:397954477760:web:94b289318e6dd205a34725",
  measurementId: "G-KSKYQ7SS1T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;