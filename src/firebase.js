// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBaMuc9r_rJOgMjdAZTcdLbh5qkptv2V74",
  authDomain: "challenge-26869.firebaseapp.com",
  projectId: "challenge-26869",
  storageBucket: "challenge-26869.appspot.com",
  messagingSenderId: "665252502342",
  appId: "1:665252502342:web:5e2b804d47cf49a7d76347",
  measurementId: "G-HM3WK9E2Z6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
