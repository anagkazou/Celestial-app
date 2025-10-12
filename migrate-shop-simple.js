// Simple migration script to push shop data to Firebase
// Run with: node migrate-shop-simple.js

const { addCollectionAndDocuments } = require('./src/firebase/firebase.utils.js');

// Import your shop data
const SHOP_DATA = require('./src/pages/shop/shop.data.js').default;

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

    // Add collections to Firebase using your existing function
    console.log('📤 Adding collections to Firebase...');
    await addCollectionAndDocuments('collections', collectionsToAdd);

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
