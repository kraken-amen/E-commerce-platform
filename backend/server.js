import express from "express";
import cors from "cors";
import 'dotenv/config';
import connectDB from "./config/mongodb.js";
// app config
const app = express();
const PORT = process.env.PORT || 4000;
connectDB();
//middelwares
app.use(cors());
app.use(express.json());
//api endpoints
app.get('/', (req, res) => {
    res.send("API is running!");
});
// listeners
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
