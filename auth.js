const express = require('express');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../middleware/auth');
const db = require('../db/database');
const router = express.Router();

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        db.get('SELECT * FROM USER WHERE EMAIL=?', [email], async (err, row) => {
            if (err || !row) return res.status(401).send('Invalid credentials');

            const validPassword = await bcrypt.compare(password, row.password);
            if (!validPassword) return res.status(401).send('Invalid credentials');

            const token = generateToken(row.id, row.isAdmin);
            res.cookie('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 3600000 // 1 hour
            });
            return res.status(200).json({ message: 'Login successful', token });
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send('Server error');
    }
});

// Registration route
router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        const query = 'INSERT INTO USER (EMAIL, PASSWORD) VALUES (?, ?)';
        db.run(query, [email, hashedPassword], function(err) {
            if (err) {
                console.log(err);
                return res.status(500).send('Error saving user');
            }
            const token = generateToken(this.lastID, false);
            res.cookie('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 3600000
            });
            return res.status(200).json({ message: 'Registration successful', token });
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send('Server error');
    }
});

// Logout route
router.post('/logout', (req, res) => {
    res.clearCookie('token');
    return res.status(200).json({ message: 'Logged out successfully' });
});

module.exports = router;
