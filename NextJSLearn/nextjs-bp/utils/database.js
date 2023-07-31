import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => { 
    mongoose.set('strictQuery', true);

    if(isConnected) { 
        return console.log('MongoDB is already connected');
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, { 
            dbName: , // ===> ADD dbName
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }) 
        console.log('Connected MongoDB');
        isConnected = true;
    } catch (error) {
        console.log(error);
    }
}