import express from "express";
import "dotenv/config";
import connectDB from "./src/db/db.js";
import userRouter from './src/routes/userRoutes.js';
import authRouter from './src/routes/authRoute.js';
import { errorHandler } from "./src/middlewares/errorHandler.js";

const app = express();

// Databse Connection
connectDB().then(() => {
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Sever is running on the port:${PORT}`);
    });
}).catch((error) => {
    console.log("Database connection error:", error);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MIDDLEWARE
// app.use(errorHandler);


// Routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);


// Middlware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal server error";
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});
