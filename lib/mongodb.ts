import mongoose from "mongoose";

const connectionString = process.env.DB_CONNECTION_URL as string
console.log(process.env.DB_CONNECTION_URL)
export const connectDB = async ()=>{
    try {
        const res = await mongoose.connect(connectionString)
        console.log("DB connected succesfull");
        
                
    } catch (error) {
        console.log("DB connection failed");
        console.log(error);

        
    }
}

