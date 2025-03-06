import mongoose from 'mongoose';
import "dotenv/config";


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB Connected...");
    } catch (error) {
        console.log("MongoDB connection failed....");
        process.exit(1);
    }
}

export default connectDB;