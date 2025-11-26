// Runtime test to verify exports work correctly
const mongoose = require('./src/index.js');

console.log('Testing mongoose-types runtime exports...');

// Test that key exports exist
if (!mongoose.Types) {
  console.error('❌ FAIL: Types is undefined');
  process.exit(1);
}

if (!mongoose.Types.ObjectId) {
  console.error('❌ FAIL: Types.ObjectId is undefined');
  process.exit(1);
}

if (!mongoose.Schema) {
  console.error('❌ FAIL: Schema is undefined');
  process.exit(1);
}

if (!mongoose.Model) {
  console.error('❌ FAIL: Model is undefined');
  process.exit(1);
}

// Test that we can create an ObjectId
try {
  const id = new mongoose.Types.ObjectId();
  if (!id) {
    console.error('❌ FAIL: Could not create ObjectId');
    process.exit(1);
  }
  console.log('✓ Created ObjectId:', id.toString());
} catch (err) {
  console.error('❌ FAIL: Error creating ObjectId:', err.message);
  process.exit(1);
}

// Test that we can create a Schema
try {
  const schema = new mongoose.Schema({ name: String });
  if (!schema) {
    console.error('❌ FAIL: Could not create Schema');
    process.exit(1);
  }
  console.log('✓ Created Schema');
} catch (err) {
  console.error('❌ FAIL: Error creating Schema:', err.message);
  process.exit(1);
}

console.log('✅ All runtime tests passed!');
