const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const Faculty = require('./models/Faculty');
const Course = require('./models/Course');

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/erp_system';

async function seedDatabase() {
  try {
    await mongoose.connect(MONGODB_URI);
    
    console.log('Connected to MongoDB');
    
    // Clear existing data
    await User.deleteMany({});
    await Faculty.deleteMany({});
    await Course.deleteMany({});
    
    console.log('Cleared existing data');
    
    // Create users
    const users = [
      {
        username: 'admin',
        password: await bcrypt.hash('admin123', 10),
        name: 'Admin User',
        class: 'Administration',
        regNo: 'ADMIN001'
      },
      {
        username: 'student1',
        password: await bcrypt.hash('student123', 10),
        name: 'Joan J',
        class: '5 BTCS A',
        regNo: '2360812'
      },
      {
        username: 'student2',
        password: await bcrypt.hash('student123', 10),
        name: 'John Doe',
        class: '5 BTCS A',
        regNo: '2360813'
      },
      {
        username: 'student3',
        password: await bcrypt.hash('student123', 10),
        name: 'Jane Smith',
        class: '5 BTCS B',
        regNo: '2360814'
      }
    ];
    
    const createdUsers = await User.insertMany(users);
    console.log(`Created ${createdUsers.length} users`);
    
    // Create faculty
    const faculty = [
      {
        name: 'Dr. Aruna R',
        email: 'aruna.r@christuniversity.in',
        department: 'Computer Science',
        campus: 'Bangalore Central Campus',
        location: 'Block 1, Room 101'
      },
      {
        name: 'Dr. Jenefa J',
        email: 'jenefa.j@christuniversity.in',
        department: 'Computer Science',
        campus: 'Bangalore Central Campus',
        location: 'Block 1, Room 102'
      },
      {
        name: 'Dr. Santhrupth S',
        email: 'santhrupth.s@christuniversity.in',
        department: 'Computer Science',
        campus: 'Bangalore Central Campus',
        location: 'Block 1, Room 103'
      },
      {
        name: 'Prof. Michael Johnson',
        email: 'michael.johnson@christuniversity.in',
        department: 'Information Technology',
        campus: 'Bangalore Central Campus',
        location: 'Block 2, Room 201'
      },
      {
        name: 'Dr. Sarah Wilson',
        email: 'sarah.wilson@christuniversity.in',
        department: 'Data Science',
        campus: 'Bangalore Central Campus',
        location: 'Block 2, Room 202'
      }
    ];
    
    const createdFaculty = await Faculty.insertMany(faculty);
    console.log(`Created ${createdFaculty.length} faculty members`);
    
    // Create courses
    const courses = [
      {
        courseCode: 'CS501',
        courseTitle: 'Advanced Data Structures',
        credits: 4,
        faculty: 'Dr. Aruna R'
      },
      {
        courseCode: 'CS502',
        courseTitle: 'Machine Learning',
        credits: 4,
        faculty: 'Dr. Jenefa J'
      },
      {
        courseCode: 'CS503',
        courseTitle: 'Web Development',
        credits: 3,
        faculty: 'Dr. Santhrupth S'
      },
      {
        courseCode: 'IT501',
        courseTitle: 'Database Management Systems',
        credits: 4,
        faculty: 'Prof. Michael Johnson'
      },
      {
        courseCode: 'DS501',
        courseTitle: 'Data Analytics',
        credits: 3,
        faculty: 'Dr. Sarah Wilson'
      },
      {
        courseCode: 'CS504',
        courseTitle: 'Software Engineering',
        credits: 4,
        faculty: 'Dr. Aruna R'
      },
      {
        courseCode: 'CS505',
        courseTitle: 'Computer Networks',
        credits: 3,
        faculty: 'Dr. Jenefa J'
      },
      {
        courseCode: 'IT502',
        courseTitle: 'Cloud Computing',
        credits: 3,
        faculty: 'Prof. Michael Johnson'
      }
    ];
    
    const createdCourses = await Course.insertMany(courses);
    console.log(`Created ${createdCourses.length} courses`);
    
    console.log('\n=== SEED DATA SUMMARY ===');
    console.log('Users created:');
    createdUsers.forEach(user => {
      console.log(`  - ${user.username} (${user.name}) - Password: ${user.username === 'admin' ? 'admin123' : 'student123'}`);
    });
    
    console.log('\nFaculty created:');
    createdFaculty.forEach(faculty => {
      console.log(`  - ${faculty.name} (${faculty.department})`);
    });
    
    console.log('\nCourses created:');
    createdCourses.forEach(course => {
      console.log(`  - ${course.courseCode}: ${course.courseTitle} (${course.credits} credits) - ${course.faculty}`);
    });
    
    console.log('\n✅ Database seeded successfully!');
    console.log('\nYou can now login with:');
    console.log('  Username: admin, Password: admin123');
    console.log('  Username: student1, Password: student123');
    console.log('  Username: student2, Password: student123');
    console.log('  Username: student3, Password: student123');
    
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await mongoose.connection.close();
    console.log('\nDatabase connection closed');
  }
}

// Run the seed function
seedDatabase();
