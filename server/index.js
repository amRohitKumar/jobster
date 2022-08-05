import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import jobRoutes from './routes/jobs.js';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}
const app = express();

const PORT = process.env.PORT || 8080;
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/jobster';

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log('MONGOOSE CONNECTION OPEN');
  })
  .catch((err) => {
    console.log('IN MONGOOSE SOMETHING WENT WRONG', err);
  });

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
  }),
);

app.use('/auth', authRoutes);
app.use('/jobs', jobRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
