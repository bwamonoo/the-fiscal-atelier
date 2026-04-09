import mongoose from "mongoose";
import { Transaction } from "../models/transaction.model.js";

export const createTransaction = async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    let { amountCents, type, category, description, date } = req.body;

    amountCents = +amountCents;
    const transaction = await Transaction.create(
      [
        {
          amountCents,
          type,
          category,
          description,
          date,
          user: req.user._id,
        },
      ],
      {
        session,
      },
    );

    res.status(201).json({ success: true, data: transaction });
  } catch (error) {
    if (session.inTransaction()) {
      await session.abortTransaction();
    }

    session.endSession();
    next(error);
  }
};

export const getUserTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find({ user: req.user._id });

    res.status(200).json({ success: true, data: transactions });
  } catch (error) {
    next(error);
  }
};
