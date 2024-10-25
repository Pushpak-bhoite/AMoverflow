import express from 'express';
const authRoute = express.Router();
import User from '../models/sign-up.js' 

authRoute.post('/sign-up', async (req, res) => {
    console.log('res', req.body)
    console.log('res', req)
    try {
        // Extract user data from request body
        const { firstName, lastName, userName, email, password } = req.body;

        // Create a new user instance
        const newUser = new User({
            firstName,
            lastName,
            userName,
            email,
            password
        });

        // Save the user to the database
        await newUser.save();

        console.log("User successfully created:", newUser);
        res.status(201).send({ message: 'User created successfully', user: newUser });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).send({ error: 'Error creating user' });
    }
});

export default authRoute;







