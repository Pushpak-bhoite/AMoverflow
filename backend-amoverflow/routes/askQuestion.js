import express from 'express';
const askQuestion = express.Router();


askQuestion.get('/askQuestion', async (req, res) => {
    try {
        res.send(req.user)
        console.log(req.user)
    } catch (error) {
        res.status(400).send("ERROR", error.message)
    }
})

export default askQuestion

