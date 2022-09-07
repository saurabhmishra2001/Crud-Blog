import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBzlyU_yOWBtvWLJZ7xBZkhullsyNEGHaM",
  authDomain: "blog-70620.firebaseapp.com",
  projectId: "blog-70620",
  storageBucket: "blog-70620.appspot.com",
  messagingSenderId: "32213623189",
  appId: "1:32213623189:web:6d3f06d8d994b8b08b569c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);
export const db = getFirestore(app);