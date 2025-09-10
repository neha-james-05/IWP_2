# Christ University ERP System

A modern, responsive Enterprise Resource Planning (ERP) system designed for Christ University, featuring a beautiful UI/UX with comprehensive student management capabilities.

## 🚀 Features

### Frontend
- **Modern Login Page**: Beautiful, responsive design with captcha verification
- **Interactive Dashboard**: Real-time announcements, attendance tracking, and progress monitoring
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Enhanced user experience with CSS animations and transitions
- **Authentication**: Secure JWT-based authentication system

### Backend
- **RESTful API**: Clean, well-structured API endpoints
- **MongoDB Integration**: Robust database with Mongoose ODM
- **Authentication Middleware**: Secure route protection
- **User Management**: Student and faculty management system
- **Course Management**: Academic course tracking and management

## 🛠️ Technology Stack

### Frontend
- HTML5, CSS3, JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts (Inter)
- Modern CSS Grid and Flexbox
- Responsive Design Principles

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs for password hashing
- CORS for cross-origin requests

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v14 or higher)
- **MongoDB** (v4.4 or higher)
- **npm** or **yarn**

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd IWP_2
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory with the following variables:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/erp_system
JWT_SECRET=your_jwt_secret_key_here_change_this_in_production
NODE_ENV=development
```

### 4. Start MongoDB
Make sure MongoDB is running on your system:
```bash
# On Windows
net start MongoDB

# On macOS (if installed via Homebrew)
brew services start mongodb-community

# On Linux
sudo systemctl start mongod
```

### 5. Seed the Database
Populate the database with initial data:
```bash
npm run seed
```

### 6. Start the Application
```bash
# Development mode (with nodemon)
npm run dev

# Production mode
npm start
```

The application will be available at `http://localhost:5000`

## 👥 Default Login Credentials

After seeding the database, you can login with:

| Username | Password | Role |
|----------|----------|------|
| admin | admin123 | Administrator |
| student1 | student123 | Student |
| student2 | student123 | Student |
| student3 | student123 | Student |

## 📁 Project Structure

```
IWP_2/
├── client/                 # Frontend files
│   ├── index.html         # Login page
│   ├── dashboard.html     # Main dashboard
│   ├── style.css          # Login page styles
│   ├── dashboard.css      # Dashboard styles
│   ├── script.js          # Frontend JavaScript
│   └── *.png, *.jpeg     # Images and assets
├── server/                # Backend files
│   ├── models/           # Database models
│   │   ├── User.js
│   │   ├── Faculty.js
│   │   └── Course.js
│   ├── routes/           # API routes
│   │   ├── auth.js
│   │   ├── faculty.js
│   │   └── academics.js
│   ├── middleware/       # Custom middleware
│   │   └── auth.js
│   ├── server.js         # Main server file
│   └── seed.js           # Database seeding script
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/login` - User login

### Faculty
- `GET /api/faculty` - Get all faculty members

### Academics
- `GET /api/academics` - Get all courses

### General
- `GET /api/test` - Test endpoint

## 🎨 UI/UX Features

### Login Page
- **Modern Design**: Clean, professional interface with gradient backgrounds
- **Captcha Verification**: Security feature to prevent automated attacks
- **Responsive Layout**: Adapts to different screen sizes
- **Loading States**: Visual feedback during authentication
- **Error Handling**: User-friendly error messages

### Dashboard
- **Interactive Banner**: Rotating announcements with navigation controls
- **Progress Tracking**: Visual progress indicators for attendance and projects
- **Announcements**: Real-time updates and notifications
- **Image Gallery**: Showcase of campus life and activities
- **Profile Management**: User profile with logout functionality

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcryptjs for secure password storage
- **CORS Protection**: Cross-origin request security
- **Input Validation**: Server-side validation for all inputs
- **Route Protection**: Middleware-based route security

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full-featured experience with all animations
- **Tablet**: Adapted layout with touch-friendly interactions
- **Mobile**: Streamlined interface for smaller screens

## 🚀 Deployment

### Production Environment Variables
```env
PORT=5000
MONGODB_URI=mongodb://your-production-mongodb-uri
JWT_SECRET=your-secure-jwt-secret-key
NODE_ENV=production
```

### Build for Production
```bash
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/neha-james-05/IWP_ERP_PROJECT/issues) page
2. Create a new issue with detailed information
3. Contact the development team

## 🎯 Future Enhancements

- [ ] Real-time notifications
- [ ] File upload functionality
- [ ] Advanced reporting features
- [ ] Mobile app development
- [ ] Integration with external systems
- [ ] Advanced analytics dashboard

---

**Developed with ❤️ for Christ University**

*Excellence and Service*
