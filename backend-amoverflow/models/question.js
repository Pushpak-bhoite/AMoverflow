import mongoose from 'mongoose';

const AnswerSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  ansUserID: {
    type: mongoose.Schema.Types.ObjectId, // User ID reference
    required: true,
    ref: 'User',
  },
  ansUserName: {
    type: String, // Store the user's name
    required: true,
  },
}, { timestamps: true });

const QuestionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId, // User ID reference
    required: true,
    ref: 'User',
  },
  userName: {
    type: String, // Store the user's name
    required: true,
  },
  answers: [AnswerSchema], // Array of answers
}, { timestamps: true });

export default mongoose.model('Question', QuestionSchema);
