import mongoose from "mongoose";
import { CATEGORIES } from "../constants.js";

const transactionSchema = new mongoose.Schema(
  {
    amountCents: {
      type: Number,
      required: [true, "Transaction amount is required"],
      validate: {
        validator(value) {
          return value > 0;
        },
        message: "Amount should be greater than zero",
      },
    },
    type: {
      type: String,
      required: true,
      enum: ["income", "expense"],
    },
    category: {
      type: String,
      required: true,
      enum: {
        values: CATEGORIES,
        message: "{VALUE} is not a supported category",
      },
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minLength: 2,
      maxLength: 200,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
      index: true,
    },
  },
  { timestamps: true },
);

export const Transaction = mongoose.model("Transaction", transactionSchema);
