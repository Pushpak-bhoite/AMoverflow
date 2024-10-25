import mongoose from 'mongoose'

const server = '127.0.0.1:27017' // REPLACE WITH YOUR OWN SERVER
const database = 'test'          // REPLACE WITH YOUR OWN DB NAME

const connectDB = async () => {
  try {
    
    await mongoose.connect(`mongodb+srv://2017pushpakbhoite:Pushpak%40123@pushpakclusture-3.zy7cn.mongodb.net/`)

    console.log('MongoDB connected!!')
  } catch (err) {
    console.log('Failed to connect to MongoDB', err)
  }
}

export default connectDB  