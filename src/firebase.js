// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5wNkmtNcfM2gCUhi1crggFxvEbu2CEC4",
  authDomain: "ecommerce-moranbravo.firebaseapp.com",
  projectId: "ecommerce-moranbravo",
  storageBucket: "ecommerce-moranbravo.appspot.com",
  messagingSenderId: "886323265639",
  appId: "1:886323265639:web:0ed346c4f220216137d4c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);