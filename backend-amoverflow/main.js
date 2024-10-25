import express from 'express';
import authRoute from './routes/auth.js';
import connectDB from './config/database.js';
const app = express();


app.use(express.urlencoded({ extended: true }));
// This is required to handle urlencoded data
app.use(express.json()); 
// This to handle json data coming from requests mainly post
app.use('/auth',authRoute)
app.get('/', (req, res) => {
  res.send('hello world');
});

connectDB();
app.listen(3400, () => {
  console.log('http://localhost:3400');
});

export default app;
