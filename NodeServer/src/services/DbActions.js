import mongoose from "mongoose";

export async function connectToDb(){

    const mongoURI = process.env.MONGOURI
    
    try {
        await mongoose.connect(mongoURI);
        console.log('MongoDB connected successfully.');
    } catch (err) {
        console.error('MongoDB connection error:', err.message);
        process.exit(1);
    }
    
}