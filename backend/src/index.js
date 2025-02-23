import express from 'express';
import {connectDB} from './lib/db.js';
import authRoutes from './routes/auth.route.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log("Server is running on port: "+PORT);
    console.log(process.env.MONGO_URI);  // or console.log(process.env.MONGODB_URI); based on what you choose
    connectDB();
});