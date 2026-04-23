import { Router } from "express";
import {
  createTransaction,
  getUserTransactions,
  getTransactionsSummary,
  getSpendingComposition,
  getTransactionCategories,
} from "../controllers/transaction.controller.js";

const transactionRouter = Router();

transactionRouter.get("/", (req, res) =>
  res.send({ title: "GET/transactions" }),
);

transactionRouter.get("/categories", getTransactionCategories);
transactionRouter.get("/summary", getTransactionsSummary);
transactionRouter.get("/spending-composition", getSpendingComposition);

transactionRouter.get("/user", getUserTransactions);
transactionRouter.delete("/user/:id", (req, res) =>
  res.send({ title: "GET/transactions/user/:id" }),
);

transactionRouter.get("/:id", (req, res) =>
  res.send({ title: "GET/transactions/:id" }),
);
transactionRouter.post("/", createTransaction);
transactionRouter.put("/:id", (req, res) =>
  res.send({ title: "PUT/transactions/:id" }),
);
transactionRouter.delete("/:id", (req, res) =>
  res.send({ title: "DELETE/transactions/:id" }),
);

export { transactionRouter };
