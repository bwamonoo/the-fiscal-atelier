import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) {
  throw new Error(
    "Please define MONGODB_URI environment variable inside .env.<development/production>.local",
  );
}

const connectToDatabase = async () => {
  try {
    const conn = await mongoose.connect(DB_URI);
    console.log(
      `Connected to database: **${conn.connection.name}** in ${NODE_ENV} mode`,
    );
  } catch (error) {
    console.error("Error connecting to database: ", error);
    process.exit(1);
  }
};

export { connectToDatabase };
