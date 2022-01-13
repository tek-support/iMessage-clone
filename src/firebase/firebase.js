// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBJCEVeW26UX2Hiivet54ctSdCCOouBkNU",
  authDomain: "app-imessage-com.firebaseapp.com",
  projectId: "app-imessage-com",
  storageBucket: "app-imessage-com.appspot.com",
  messagingSenderId: "533414656180",
  appId: "1:533414656180:web:c1e0007179c161b7133fe1",
  measurementId: "G-844PP68BZC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
