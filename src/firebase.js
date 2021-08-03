import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA__hUc__djHr3z8A5SJZjP5QIyaZsYxYE",
  authDomain: "messenger-14b08.firebaseapp.com",
  projectId: "messenger-14b08",
  storageBucket: "messenger-14b08.appspot.com",
  messagingSenderId: "874640454464",
  appId: "1:874640454464:web:7155be712b15d985ad80a5",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
