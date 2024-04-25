import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js'


dotenv.config();

mongoose.connect(process.env.MONGO)
.then(() => {
    console.log('MongoDB is Connected');
})
.catch((err) => {
  console.log(err);
});

const app = express();

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});

// app.get('/test', ( req, res ) => {
//   res.json({message: 'Api is Working'});
// });

app.use('/api/user', userRoutes);