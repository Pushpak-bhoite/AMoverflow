import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const signIn = express.Router();

signIn.post('/sign-in', async (req, res) => {
    const { email, password } = req.body;
    console.log('req.body', req.body)

    // Validate request body
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: 'Email and password are required.',
        });
    }

    try {
        // Check if user exists
        const existingUser = await User?.findOne({ email });
        if (!existingUser) {
            return res.status(401).json({
                success: false,
                message: 'Incorrect email or password.',
            });
        }

        // Check if password is correct
        if (existingUser.password !== password) {
            return res.status(401).json({
                success: false,
                message: 'Incorrect password.',
            });
        }

        // Generate JWT token
        const token = jwt.sign(
            {
                userId: existingUser.id,
                email: existingUser.email,
            },
            'secretkeyappearshere',
            { expiresIn: '7d' }
        );

        // Set the token in a cookie and send response
        res.cookie('token', token, { httpOnly: true, secure: true }); // Add secure: true in production
        return res.status(200).json({
            success: true,
            data: {
                userId: existingUser.id,
                email: existingUser.email,
                token,
            },
        });
    } catch (error) {
        console.error('Error during sign-in:', error);
        return res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.',
        });
    }
});

export default signIn;
