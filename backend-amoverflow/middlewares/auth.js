import express from 'express';
import jwt from "jsonwebtoken";
import User from '../models/user.js'

export const userAuth = async (req, res, next) => {
    const { token } = req.cookies
    if (token) {
        try {
            const decode = jwt.verify(token, "secretkeyappearshere");
        console.log('decode->', decode)
        const {userId} =  decode;
        const user = await User.findById(userId)
        console.log(user)
        req.user = user //set user data             
        //  Return response with decode data      
        next()
        } catch (error) {
            res.json({'ERROR':error.message});
        }

    } else {
        res.json({
            login: false,
            data: "token is not valid ",
        });
    }
}

