import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4NYQCar5rR8ffUmbpNG4fUxrDklGAQTU",
  authDomain: "notion-clone-64acd.firebaseapp.com",
  projectId: "notion-clone-64acd",
  storageBucket: "notion-clone-64acd.firebasestorage.app",
  messagingSenderId: "123720218397",
  appId: "1:123720218397:web:6217293b7824b1c19a93f4"
};

const app = getApps().length === 0 ?  initializeApp(firebaseConfig) : getApp();
const bd = getFirestore(app);

export { bd };
