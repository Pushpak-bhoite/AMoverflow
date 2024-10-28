import mongoose from 'mongoose';

const AnswerSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  ansUserID: {
    type: mongoose.Schema.Types.ObjectId, // Assuming user IDs are ObjectIds
    required: true,
    ref: 'User', // Reference to the User model
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
    type: [String], // Array of strings for tags
    required: true,
  },
  answers: [AnswerSchema], // Array of answers
}, { timestamps: true });

export default mongoose.model('Question', QuestionSchema);
