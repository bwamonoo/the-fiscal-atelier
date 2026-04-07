import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", getUser);
userRouter.post("/", (req, res) => res.send({ title: "POST/users" }));
userRouter.put("/:id", (req, res) => res.send({ title: "PUT/users/:id" }));
userRouter.delete("/:id", (req, res) =>
  res.send({ title: "DELETE/users/:id" }),
);

export { userRouter };
