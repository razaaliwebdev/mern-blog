import express from "express";
import "dotenv/config";
import connectDB from "./src/db/db.js";
import userRouter from './src/routes/userRoutes.js';
import authRouter from './src/routes/authRoute.js';

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


// Routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
