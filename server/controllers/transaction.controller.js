import mongoose from "mongoose";
import { Transaction } from "../models/transaction.model.js";
import { ICONS } from "../constants.js";

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

    await session.commitTransaction();

    res.status(201).json({ success: true, data: transaction });
  } catch (error) {
    if (session.inTransaction()) {
      await session.abortTransaction();
    }

    next(error);
  } finally {
    await session.endSession();
  }
};

export const getUserTransactions = async (req, res, next) => {
  const { search, category, month, startDate, endDate } = req.query;
  const query = { user: req.user._id };

  if (category) query.category = category;

  if (month) {
    const startOfMonth = new Date(`${month}-01`);
    const endOfMonth = new Date(startOfMonth);
    endOfMonth.setMonth(startOfMonth.getMonth() + 1);

    query.date = {
      $gte: startOfMonth,
      $lt: endOfMonth,
    };
  }

  if (startDate) {
    const start = new Date(startDate); // eg., startDate: 2026-02-01
    let end;
    // const end = endDate || new Date();

    if (endDate) {
      end = new Date(endDate);
      end.setDate(end.getDate() + 1);
    } else {
      end = new Date();
    }

    query.data = {
      $gte: start,
      $lt: end,
    };
  }

  try {
    let transactions = await Transaction.find(query).lean();

    transactions.forEach((trxn) => {
      trxn.icon = ICONS[trxn.category];
    });

    if (search) {
      const lowerCaseSearch = search.toLowerCase();

      transactions = transactions.filter((trxn) => {
        return trxn.description.toLowerCase().includes(lowerCaseSearch);
      });
    }

    res.status(200).json({ success: true, data: transactions });
  } catch (error) {
    next(error);
  }
};

export const getTransactionsSummary = async (req, res, next) => {
  const query = { user: req.user._id };

  const start = new Date();
  start.setDate(1);
  start.setHours(0, 0, 0, 0);

  const end = new Date();

  query.date = {
    $gte: start,
    $lt: end,
  };

  try {
    let transactions = await Transaction.find(query).lean();

    let income = 0;
    let expense = 0;
    let monthlyBalance = 0;

    transactions.forEach((trnx) => {
      trnx.type === "income"
        ? (income += trnx.amountCents)
        : (expense += trnx.amountCents);
    });

    monthlyBalance = income - expense;

    res
      .status(200)
      .json({ success: true, data: { income, expense, monthlyBalance } });
  } catch (error) {
    next(error);
  }
};
