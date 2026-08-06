import express from "express";
import cors from "cors";
import 'dotenv/config';
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRoute from "./routes/userRoute.js";
import prodRoute from "./routes/productRoute.js";
import dns from "dns";
// app config
dns.setServers(['8.8.8.8', '8.8.4.4']);
const app = express();
const PORT = process.env.PORT || 4000;
connectDB();
connectCloudinary();
//middelwares
app.use(cors());
app.use(express.json());
//api endpoints
app.use("/api/user", userRoute);
app.use("api/product",prodRoute)
app.get('/', (req, res) => {
    res.send("API is running!");
});
// listeners
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
