import { Router } from "express";

const transactionRouter = Router();

transactionRouter.get("/", (req, res) => res.send({title: "GET/transactions"}));
transactionRouter.get("/:id", (req, res) => res.send({title: "GET/transactions/:id"}));
transactionRouter.post("/", (req, res) => res.send({title: "POST/transactions"}));
transactionRouter.put("/:id", (req, res) => res.send({title: "PUT/transactions/:id"}));
transactionRouter.delete("/:id", (req, res) => res.send({title: "DELETE/transactions/:id"}));
transactionRouter.get("/user/:id", (req, res) => res.send({title: "GET/transactions/user/:id"}));
transactionRouter.delete("/user/:id", (req, res) => res.send({title: "GET/transactions/user/:id"}));

export { transactionRouter };