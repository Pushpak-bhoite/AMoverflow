import express from 'express';
import jwt from "jsonwebtoken";
import User from '../models/user.js'

export const userAuth = async (req, res, next) => {


    console.log('imcalled')
    // const { token } = req.cookies
    let token = req.header('Authorization');
    console.log('token', token)
    if (token) {
        try {
            token = token.replace(/^Bearer\s/, '');
            const decode = jwt.verify(token, "secretkeyappearshere");
        console.log('decode->', decode)
        const {userId} =  decode;
        const user = await User.findById(userId)
        console.log('user', user)
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

