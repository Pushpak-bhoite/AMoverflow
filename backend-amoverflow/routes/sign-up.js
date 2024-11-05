import express from 'express';
import User from '../models/user.js';

const signUp = express.Router();

signUp.post('/sign-up', async (req, res) => {
    try {
        // Extract user data from request body
        const { firstName, lastName, username, email, password } = req.body;
        console.log('signUp.js',req.body)
        // Validate request data
        if (!firstName) return res.status(400).json({ error: 'First name is required.' });
        if (!lastName) return res.status(400).json({ error: 'Last name is required.' });
        if (!username) return res.status(400).json({ error: 'username is required.' });
        if (!email) return res.status(400).json({ error: 'Email is required.' });
        if (!password) return res.status(400).json({ error: 'Password is required.' });
        if (password.length < 8) return res.status(400).json({ error: 'Password must be at least 8 characters long.' });

        // Check if user with the same email or username already exists
        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(400).json({ error: 'User with this email or username already exists.' });
        }
        console.log('-------------', username)
        // Create a new user instance
        const newUser = new User({
            firstName,
            lastName,
            username,
            email,
            password
        });

        // Save the user to the database
        await newUser.save();

        console.log("User successfully created:", newUser);
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: 'Server error. Please try again later.' });
    }
});

export default signUp;
