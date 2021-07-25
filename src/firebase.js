// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBzncn3cdPiUmr0PML9IMVo4XuEZj1t9A0",
  authDomain: "whats-app-e1b34.firebaseapp.com",
  projectId: "whats-app-e1b34",
  storageBucket: "whats-app-e1b34.appspot.com",
  messagingSenderId: "119600761952",
  appId: "1:119600761952:web:d9cbd119ab801f56818705",
  measurementId: "G-Q4G2EDKY3K",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
