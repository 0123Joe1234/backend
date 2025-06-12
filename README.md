# Zoomify - Premium Photography Equipment

A modern web application for premium photography equipment with secure authentication and seamless shopping experience.

## Features

### User Features
- User Authentication (Login/Register)
- Product Browsing & Search
- Shopping Cart Management
- Secure Checkout Process
- Order History

### Technical Features
- Secure Session Management with JWT
- HTTP-Only Cookies for Security
- Responsive Black & Orange Theme
- Protected Routes
- Real-time Cart Updates

### Security Measures
- Password Hashing (bcrypt)
- Input Validation
- CORS Protection
- Helmet Security Headers
- Secure Session Management

## 💻 Tech Stack

### Frontend
- React.js
- React Router v6
- Modern CSS3
- Responsive Design

### Backend
- Node.js
- Express.js
- SQLite Database
- JWT Authentication

## 🛠️ Setup & Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd webtech
```

2. Install dependencies:
```bash
# Install server dependencies
npm install

# Install client dependencies
cd client
npm install
```

3. Start the application:
```bash
# Start both frontend and backend
npm run dev:full

# Or start separately:
npm run dev      # Backend only
npm run client   # Frontend only
```

## 🌐 Access Points
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 📱 Application Structure

### Main Components
- Product Catalog
- Shopping Cart
- User Authentication
- Checkout Process
- Order Management

### Key Features
- **Product Display**: Grid layout with hover effects
- **Cart Management**: Real-time updates
- **User Auth**: Protected routes and secure sessions
- **Checkout**: Multi-step secure process
- **Theme**: Black & Orange professional design

## 🔒 Security Implementation

- Secure password hashing
- Protected API endpoints
- HTTP-Only cookies
- Input sanitization
- XSS protection
- CSRF prevention

## 🔄 API Endpoints

### Authentication
- POST /api/auth/register
- POST /api/auth/login
- POST /api/auth/logout

### Products
- GET /api/products
- GET /api/products/:id

### Cart & Orders
- GET /api/cart
- POST /api/cart/add
- POST /api/orders/create

## 🎨 Design Features

- Professional black & orange theme
- Responsive layout
- Interactive UI elements
- Smooth transitions
- Mobile-friendly design

## 📦 Dependencies

### Frontend
- react
- react-router-dom
- react-scripts

### Backend
- express
- bcryptjs
- jsonwebtoken
- sqlite3
- cookie-parser
- cors

## 🚀 Future Enhancements

- Payment Gateway Integration
- Advanced Product Search
- User Reviews & Ratings
- Admin Dashboard
- Wishlist Feature

## 📝 License

This project is licensed under the MIT License.
