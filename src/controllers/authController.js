// src/controllers/authController.js
const jwt = require("jsonwebtoken");
const secret = "94183c2a-c8e2-4965-bd24-5b1d80126e64";

const authController = {
    login: (request, response) => {
        const { username, password } = request.body;

        if (username === 'admin' && password === 'admin') {
            const userDetails = {
                name: 'John Cena',
                email: 'john@cena.com'
            };
            const token = jwt.sign(userDetails, secret, { expiresIn: '1h' });
            response.cookie('jwtToken', token, { httpOnly: true, secure: true, domain: 'localhost', path: '/' });
            response.status(200).json({ message: 'Login successful', userDetails: userDetails });
        } else {
            response.status(401).json({ message: 'Invalid credentials' });
        }
    },

    logout: (request, response) => {
        response.clearCookie('jwtToken', { httpOnly: true, secure: true, domain: 'localhost', path: '/' });
        response.status(200).json({ message: 'Logout successful' });
    },

    isuserLoggedIn: (request, response) => {
        const token = request.cookies.jwtToken;
        if (!token) {
            return response.status(401).json({ message: 'Unauthorized access' });
        }
        jwt.verify(token, secret, (error, decoded) => {
            if (error) {
                return response.status(401).json({ message: 'Unauthorized access' });
            }
            return response.status(200).json({ message: 'User is logged in', userDetails: decoded });
        });
    }
};

module.exports = authController;