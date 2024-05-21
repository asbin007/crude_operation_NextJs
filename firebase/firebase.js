import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUnjDIqINjSKeu3PJeXBYjjWGl6qlYpNo",
  authDomain: "instaclone1-7fb33.firebaseapp.com",
  projectId: "instaclone1-7fb33",
  storageBucket: "instaclone1-7fb33.appspot.com",
  messagingSenderId: "110300141594",
  appId: "1:110300141594:web:c32f5a9dabbf802d0659a3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
