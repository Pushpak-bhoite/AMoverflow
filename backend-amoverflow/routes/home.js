import express from 'express';
import Question from '../models/question.js'; // Adjust the path to your Question model
// import question from '../models/question';

const home = express.Router();

// Route to get all questions along with their answers
home.get('/', async (req, res) => {
  try {
    // Fetch all questions from the database
    const questions = await Question.find()   //.populate('userID', 'userName'); // Use `populate` to fetch user details if needed

    // Send the questions to the frontend
    res.status(200).json(questions);
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default home;
