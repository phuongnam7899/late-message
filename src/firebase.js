import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBD8pzSFtLy454InbXK7kgD8EH1RRCz91s",
  authDomain: "personal-website-c566d.firebaseapp.com",
  projectId: "personal-website-c566d",
  storageBucket: "personal-website-c566d.appspot.com",
  messagingSenderId: "309090899161",
  appId: "1:309090899161:web:fff2b1db81dfef154f5ac8",
  measurementId: "G-HYNEYC1P64"
};

export const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseFirestore = getFirestore(app)
export const analytics = getAnalytics(app);