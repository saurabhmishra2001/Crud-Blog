// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACLXlB2IRZj-zTZBgSdHc0Kyg4peFf8A8",
  authDomain: "blog-project-16e04.firebaseapp.com",
  projectId: "blog-project-16e04",
  storageBucket: "blog-project-16e04.appspot.com",
  messagingSenderId: "1053368982472",
  appId: "1:1053368982472:web:ed26c5aa78a731bf9abefd",
  measurementId: "G-K8YD2DVSD8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app, auth};

