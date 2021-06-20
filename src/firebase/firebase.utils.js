import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAL2aE3yPWkq597a94bby69VSMMHlOOi8Q",
  authDomain: "e-commerce-app-6955c.firebaseapp.com",
  databaseURL: "https://e-commerce-app-6955c.firebaseio.com",
  projectId: "e-commerce-app-6955c",
  storageBucket: "e-commerce-app-6955c.appspot.com",
  messagingSenderId: "1040698314680",
  appId: "1:1040698314680:web:3d8528233160feb342094d",
};

export const createUserProfileDocument = async (userAuth) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/ ${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        // ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user :", error.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
