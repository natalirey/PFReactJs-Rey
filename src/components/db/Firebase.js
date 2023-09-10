import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBRejeY54djr7V6hTUXZ0ckfu85DujT9r0",
  authDomain: "pfreactjs-57236.firebaseapp.com",
  projectId: "pfreactjs-57236",
  storageBucket: "pfreactjs-57236.appspot.com",
  messagingSenderId: "986083579074",
  appId: "1:986083579074:web:8ae95c24816d23ca01d75b"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);