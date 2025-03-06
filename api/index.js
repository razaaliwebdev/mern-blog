import express from "express";
import "dotenv/config";
import connectDB from "./src/db/db.js";

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

