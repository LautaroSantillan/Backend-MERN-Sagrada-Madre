import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/Sagrada-Madre-MERN");
        console.log("DB:'Sagrada-Madre-MERN' >>> Is connected");
    } catch (error) {
        console.error(error);
    }
}
