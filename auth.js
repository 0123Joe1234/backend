const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET || 'your-secret-key'; // In production, use environment variable

const generateToken = (userId, isAdmin = false) => {
    return jwt.sign({ userId, isAdmin }, secretKey, { expiresIn: '1h' });
};

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1] || req.cookies.token;

    if (!token) {
        return res.status(401).send('Access denied or expired token');
    }

    try {
        const verified = jwt.verify(token, secretKey);
        req.user = verified;
        next();
    } catch (err) {
        console.log(err);
        return res.status(401).send('Invalid or expired token');
    }
};

module.exports = { generateToken, verifyToken };
