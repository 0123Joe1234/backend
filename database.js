const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database(path.join(__dirname, 'database.sqlite'), (err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to SQLite database');
    
    // Create users table if it doesn't exist
    db.run(`CREATE TABLE IF NOT EXISTS USER (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        isAdmin BOOLEAN DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // Create cameras table if it doesn't exist
    db.run(`CREATE TABLE IF NOT EXISTS CAMERA (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        price DECIMAL(10,2) NOT NULL,
        sensor TEXT NOT NULL,
        iso TEXT NOT NULL,
        fps TEXT NOT NULL,
        video TEXT NOT NULL,
        image_url TEXT NOT NULL,
        stock INTEGER DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // Create orders table if it doesn't exist
    db.run(`CREATE TABLE IF NOT EXISTS ORDER_HISTORY (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        camera_id INTEGER NOT NULL,
        quantity INTEGER NOT NULL,
        total_price DECIMAL(10,2) NOT NULL,
        order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES USER(id),
        FOREIGN KEY (camera_id) REFERENCES CAMERA(id)
    )`);

    // Create shopping cart table if it doesn't exist
    db.run(`CREATE TABLE IF NOT EXISTS CART (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        camera_id INTEGER NOT NULL,
        quantity INTEGER NOT NULL,
        added_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES USER(id),
        FOREIGN KEY (camera_id) REFERENCES CAMERA(id)
    )`);
});

module.exports = db;
