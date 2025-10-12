const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc, batch, writeBatch, doc } = require('firebase/firestore');

// Import your shop data
const SHOP_DATA = require('./src/pages/shop/shop.data.js').default;

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
const app = initializeApp(config);
const db = getFirestore(app);

const migrateShopData = async () => {
  try {
    console.log('🚀 Starting shop data migration to Firebase...');
    
    // Convert SHOP_DATA to array format for Firebase
    const collectionsToAdd = Object.keys(SHOP_DATA).map(key => ({
      title: key,
      items: SHOP_DATA[key].items
    }));

    console.log(`📦 Found ${collectionsToAdd.length} collections to migrate:`);
    collectionsToAdd.forEach(collection => {
      console.log(`  - ${collection.title}: ${collection.items.length} items`);
    });

    // Clear existing collections first (optional - comment out if you want to keep existing data)
    console.log('🗑️  Clearing existing collections...');
    // Note: You might want to implement a function to clear existing collections
    // For now, we'll just add new data

    // Add collections to Firebase
    console.log('📤 Adding collections to Firebase...');
    
    for (const collectionData of collectionsToAdd) {
      const batch = writeBatch(db);
      const collectionRef = collection(db, 'collections');
      
      // Add the collection document
      const collectionDocRef = doc(collectionRef);
      batch.set(collectionDocRef, {
        title: collectionData.title,
        items: collectionData.items
      });
      
      await batch.commit();
      console.log(`✅ Added collection: ${collectionData.title}`);
    }

    console.log('🎉 Migration completed successfully!');
    console.log('📊 Summary:');
    console.log(`  - Collections migrated: ${collectionsToAdd.length}`);
    console.log(`  - Total items: ${collectionsToAdd.reduce((total, collection) => total + collection.items.length, 0)}`);
    
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
};

// Run the migration
migrateShopData();
