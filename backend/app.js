import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoute from "./routes/user.route.js";


const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



// CORS Configuration (updated to allow all origins temporarily)
const corsOptions = {
    origin: "http://localhost:5173", // Update to match your frontend URL (use http or https based on your frontend)
    credentials: true
};
app.use(cors(corsOptions));


// API Routes
app.use("/api/v1/user", userRoute);

export default app

