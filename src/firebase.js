
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDxlTON7BE8HP2wNjLj-yseeigxpXLn7ts",
    authDomain: "linkedin-clone-2e072.firebaseapp.com",
    projectId: "linkedin-clone-2e072",
    storageBucket: "linkedin-clone-2e072.appspot.com",
    messagingSenderId: "883939055874",
    appId: "1:883939055874:web:7c3e992cef7bd98c40ca1b"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth}