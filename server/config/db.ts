import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI!);
  } catch (error) {
    let errorMessage = "Failed to connect";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.log(errorMessage);
  }

  const connection = mongoose.connection;
  if (connection.readyState >= 1) {
    console.log("Connected to database");
    return;
  }
  connection.on("error", () => console.log("Connection failed"));
};

export default connectDB;
