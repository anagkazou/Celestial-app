import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const createUserProfileDocument = async (userAuth) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

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

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title] = collection;
    return accumulator;
  }, {});
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const saveUserCart = async (userId, cartItems) => {
  if (!userId) return;
  
  try {
    const userCartRef = firestore.doc(`users/${userId}`);
    const userDoc = await userCartRef.get();
    
    if (userDoc.exists) {
      await userCartRef.update({
        cartItems: cartItems,
        cartUpdatedAt: new Date()
      });
    } else {
      await userCartRef.set({
        cartItems: cartItems,
        cartUpdatedAt: new Date()
      });
    }
  } catch (error) {
    console.log('Error saving cart to Firebase:', error.message);
  }
};

export const loadUserCart = async (userId) => {
  if (!userId) return [];
  
  try {
    const userCartRef = firestore.doc(`users/${userId}`);
    const cartSnapshot = await userCartRef.get();
    
    if (cartSnapshot.exists) {
      const userData = cartSnapshot.data();
      return userData.cartItems || [];
    }
    return [];
  } catch (error) {
    console.log('Error loading cart from Firebase:', error.message);
    return [];
  }
};

export const clearUserCart = async (userId) => {
  if (!userId) return;
  
  try {
    const userCartRef = firestore.doc(`users/${userId}`);
    const userDoc = await userCartRef.get();
    
    if (userDoc.exists) {
      await userCartRef.update({
        cartItems: [],
        cartUpdatedAt: new Date()
      });
    } else {
      await userCartRef.set({
        cartItems: [],
        cartUpdatedAt: new Date()
      });
    }
  } catch (error) {
    console.log('Error clearing cart from Firebase:', error.message);
  }
};

export default firebase;
