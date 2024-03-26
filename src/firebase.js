import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBu24l5NqjE4ObGGKaTiE2xhZYeF7VEUI8",
    authDomain: "line-clone-aa4cb.firebaseapp.com",
    projectId: "line-clone-aa4cb",
    storageBucket: "line-clone-aa4cb.appspot.com",
    messagingSenderId: "255487774773",
    appId: "1:255487774773:web:ea72baf75d2187ba39a17c"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};
