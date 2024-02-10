import mongoose from "mongoose";

const connection = {};

export const connectToDB = async () => {
  const mongoLink = process.env.MONGO;
  // const mongoLink = "mongodb+srv://new-user123:new-user123@cluster0.k65y6xg.mongodb.net/dashboard?retryWrites=true&w=majority";
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(mongoLink);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error)
    throw new Error(error);
  }
};
