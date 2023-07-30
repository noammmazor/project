
// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore}from "firebase/firestore"
import {getStorage} from "firebase/storage"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDgp83gdpZD3MN5KlkM8NLlfGiE7UA5WYk",
    authDomain: "dog4you-f4d30.firebaseapp.com",
    projectId: "dog4you-f4d30",
    storageBucket: "dog4you-f4d30.appspot.com",
    messagingSenderId: "703852475626",
    appId: "1:703852475626:web:5eb575c1cc82cc4d2c5393",
    measurementId: "G-R5WK7PSH63"
  };
  
  
  
  // Initialize Firebase
  const app = getApps.lenght > 0 ? getApp() :initializeApp(firebaseConfig);//to use in fire base

  const auth = getAuth(app);//Auticion
  const storage = getStorage(app);
  const db = getFirestore(app);//create database in the fire base

    export{
      db,
      auth,
      storage,
    }