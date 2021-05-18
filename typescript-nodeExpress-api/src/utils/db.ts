import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/tsExpress', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    console.log('mongo connected')
  } catch (error) {
    console.log('error', error)
  }
}

export default connectDB
