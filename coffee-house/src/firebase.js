import firebase from 'firebase';
require("firebase/firestore");
import 'firebase/storage';
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyChhy_dNXB3HPOxkgxrfsNPb20z3sTMlnU",
    authDomain: "coffee-house2.firebaseapp.com",
    databaseURL: "https://coffee-house2.firebaseio.com",
    projectId: "coffee-house2",
    storageBucket: "coffee-house2.appspot.com",
    messagingSenderId: "530661620886",
    appId: "1:530661620886:web:da7d54f0a82fd96d4c16b7",
    measurementId: "G-64M493MBQH"
  };
  // Initialize Firebase
  export const firebaseApp = firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore();

  