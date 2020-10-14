import firebase from 'firebase/app';

import 'firebase/firestore'; 
import 'firebase/auth' 



const config = {
    apiKey: "AIzaSyBbE1fLCL7X5YFvmFSbjau79ofo8DS3LHc",
    authDomain: "celestial-app.firebaseapp.com",
    databaseURL: "https://celestial-app.firebaseio.com",
    projectId: "celestial-app",
    storageBucket: "celestial-app.appspot.com",
    messagingSenderId: "692557430147",
    appId: "1:692557430147:web:18c4c2a83986732c1ccab6"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const  provider = new firebase.auth.GoogleAuthProvider();

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
