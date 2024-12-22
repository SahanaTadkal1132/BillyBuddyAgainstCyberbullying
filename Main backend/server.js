const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./models/User'); // Ensure you have a User model (see below)
const app = express();

app.get('/file1', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'file1.html'));                             // Assuming you have a login.html page
});

// Middleware
app.use(express.json());                                                     // To parse incoming JSON requests
app.use(cors());                                              // To allow cross-origin requests (useful if frontend and backend are on different ports)

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/', {
})
.then(() => {
    console.log('MongoDB connected');
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});

// Route to serve signup page
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

// POST route to handle signup form submission
app.post('/api/auth/signup', async (req, res) => {
    const { firstName, lastName, userName, email, password, phone } = req.body;

    // Simple validation (ensure all fields are filled)
    if (!firstName || !lastName || !userName || !email || !password || !phone) {
        return res.status(400).json({ message: 'All fields are required!' });
    }

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists with this email!' });
        }

        // Create a new user
        const newUser = new User({ firstName, lastName, userName, email, password, phone });

        // Save the user to MongoDB
        await newUser.save();

        // Send success response
        res.status(201).json({ message: 'Signup successful! Please log in.' });

    } catch (err) {
        console.error('Error in signup:', err);
        res.status(500).json({ message: 'Something went wrong. Please try again later.' });
    }
});

// Route to handle login page (you can create a similar page for login like signup)
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html')); // Assuming you have a login.html page
});

app.post('/api/auth/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (password !== user.password) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }


        // Generate a JWT token
     

        // Send success response with the token
        res.json({ message: 'Login successful'});
       res.redirect('/app');
    } catch (err) {
        console.error('Error in login:', err);
        res.status(500).json({ message: 'Something went wrong. Please try again later.' });
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'billybot', 'src', 'App.jsx'));
});

// Default route for handling unknown paths
app.get('*', (req, res) => {
    res.status(404).send('Page not found');
});

// Start the server on port 5000
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
