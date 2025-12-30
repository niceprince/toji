import mongoose from "mongoose";
// import { User } from "@/models/user";

export const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(
      process.env.MONGO_DB_URL as string,
      {
        dbName: "toji_work_manager_db",
      }
    );

    console.log("Database connected");
    console.log(connection);
  } catch (error) {
    console.log("failed to connect with database...");
    console.log(error);
  }
};
