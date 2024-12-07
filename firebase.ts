import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDa5UzNXRZdRTzETKd1nLa57nddArzl0_8",
  authDomain: "notion-clone-b983a.firebaseapp.com",
  projectId: "notion-clone-b983a",
  storageBucket: "notion-clone-b983a.firebasestorage.app",
  messagingSenderId: "640285834951",
  appId: "1:640285834951:web:c8b8066dba4168501e88e2"
};

const app = getApps().length === 0 ?  initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
