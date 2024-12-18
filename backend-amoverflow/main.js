import express from 'express';
import signUp from './routes/sign-up.js';
import signIn from './routes/sign-in.js';
import profile from './routes/profile.js';
import askQuestion from './routes/askQuestion.js';
import home from './routes/home.js';
import { userAuth } from './middlewares/auth.js';
import connectDB from './config/database.js';
import cookieParser from 'cookie-parser';

const app = express();
import cors from 'cors'


app.use(cors())
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
// This is required to handle urlencoded data
app.use(express.json());
// This to handle json data coming from requests mainly post
app.use('/home',home);
app.use('/auth', signUp)
app.use('/auth', signIn)
app.use('/profile',userAuth, profile)
app.use('/ask-question', userAuth, askQuestion)



connectDB();
app.listen(3400, () => {
  console.log('http://localhost:3400');
});

export default app;
