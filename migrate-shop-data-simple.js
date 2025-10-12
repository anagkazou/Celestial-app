// Simple migration script to push updated shop data to Firebase
// This script works with your existing Firebase setup

const firebase = require('firebase/app');
require('firebase/firestore');

// Load environment variables
require('dotenv').config();

// Firebase configuration
const config = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VITE_FIREBASE_DATABASE_URL,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const firestore = firebase.firestore();

// Import your shop data
const SHOP_DATA = require('./src/pages/shop/shop.data.js').default;

const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

const migrateShopData = async () => {
  try {
    console.log('🚀 Starting shop data migration to Firebase...');
    console.log('📊 Updated pricing structure:');
    console.log('  - Chairs: $1,250 - $2,850');
    console.log('  - Light Fixtures: $1,850 - $2,500');
    console.log('  - Sofas: $3,200 - $4,500');
    console.log('  - Stools: $750 - $1,300');
    console.log('  - Ottomans: $1,150 - $1,800');
    
    // Convert SHOP_DATA to array format for Firebase
    const collectionsToAdd = Object.keys(SHOP_DATA).map(key => ({
      title: key,
      items: SHOP_DATA[key].items
    }));

    console.log(`\n📦 Found ${collectionsToAdd.length} collections to migrate:`);
    collectionsToAdd.forEach(collection => {
      console.log(`  - ${collection.title}: ${collection.items.length} items`);
    });

    // Add collections to Firebase
    console.log('\n📤 Adding collections to Firebase...');
    await addCollectionAndDocuments('collections', collectionsToAdd);

    console.log('\n🎉 Migration completed successfully!');
    console.log('📊 Summary:');
    console.log(`  - Collections migrated: ${collectionsToAdd.length}`);
    console.log(`  - Total items: ${collectionsToAdd.reduce((total, collection) => total + collection.items.length, 0)}`);
    console.log('\n🌐 Your updated shop data with realistic pricing is now live on Firebase!');
    
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
};

// Run the migration
migrateShopData();
