// Your web app's Firebase configuration
import firebase from "firebase";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAnZXr9OFgsohp6Wwsl0H5ogGNqxAkUbLo",
    authDomain: "bookworm-f7f6c.firebaseapp.com",
    databaseURL: "https://bookworm-f7f6c.firebaseio.com",
    projectId: "bookworm-f7f6c",
    storageBucket: "bookworm-f7f6c.appspot.com",
    messagingSenderId: "450305144113",
    appId: "1:450305144113:web:36e104c97cdf83b974ec10"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;