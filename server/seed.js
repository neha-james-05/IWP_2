// server/seed.js

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const User = require('./models/User');

async function run() {
  const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/erp_system';

  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected for seeding');

    const username = process.env.SEED_USERNAME || 'admin';
    const plainPassword = process.env.SEED_PASSWORD || 'admin123';

    const existing = await User.findOne({ username });
    if (existing) {
      console.log(`User '${username}' already exists. Skipping create.`);
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(plainPassword, salt);

      await User.create({ username, password: hashed, name: 'Admin User', class: 'N/A', regNo: 'N/A' });
      console.log(`Created user -> username: ${username}, password: ${plainPassword}`);
    }

    console.log('Seeding complete.');
  } catch (err) {
    console.error('Seeding error:', err);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

run();


