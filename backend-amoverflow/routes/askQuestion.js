import express from 'express';
import Question from '../models/question.js'; // Import your Question model

const askQuestion = express.Router();

askQuestion.post('/', async (req, res) => {
  try {
    const { title, description, tags } = req.body;
    
    // Assuming req.user contains the authenticated user details
    const { _id: userID, firstName, lastName } = req.user;
    const userName = `${firstName} ${lastName}`;

    // Create a new question object
    const newQuestion = new Question({
      title,
      description,
      tags: Array.isArray(tags) ? tags : tags.split(',').map(tag => tag.trim()), // Ensure tags are an array
      userID,
      userName,
    });

    // Save the question to the database
    const savedQuestion = await newQuestion.save();

    // Send back the saved question as a response
    res.status(201).json(savedQuestion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default askQuestion;
