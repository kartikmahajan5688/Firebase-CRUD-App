import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrR84IT2XSDEYGk7b4ztLK-aupdcrhuaI",
  authDomain: "crud-app-89ac4.firebaseapp.com",
  projectId: "crud-app-89ac4",
  storageBucket: "crud-app-89ac4.appspot.com",
  messagingSenderId: "508836782548",
  appId: "1:508836782548:web:285b58441fcfc31bdb3641",
  measurementId: "G-T0PXN26WXX"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
