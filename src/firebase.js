import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5wNkmtNcfM2gCUhi1crggFxvEbu2CEC4",
  authDomain: "ecommerce-moranbravo.firebaseapp.com",
  projectId: "ecommerce-moranbravo",
  storageBucket: "ecommerce-moranbravo.appspot.com",
  messagingSenderId: "886323265639",
  appId: "1:886323265639:web:0ed346c4f220216137d4c2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);