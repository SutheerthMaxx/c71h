import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyD6xzVHVgje1_kDnCV9nWTdPHH6I0OJLkY",
    authDomain: "classtest5.firebaseapp.com",
    projectId: "classtest5",
    storageBucket: "classtest5.appspot.com",
    messagingSenderId: "930667687727",
    appId: "1:930667687727:web:6cd87f2eb0fb57b7b73bda"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
