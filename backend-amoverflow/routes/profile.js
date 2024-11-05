import express from 'express';
const profile = express.Router();
import jwt from "jsonwebtoken";
import User from '../models/user.js'
profile.get('/', async (req, res) => {
    try {
        res.send(req.user)
        console.log(req.user)

    } catch (error) {
        res.status(400).send("ERROR", error.message)
    }
})

export default profile

