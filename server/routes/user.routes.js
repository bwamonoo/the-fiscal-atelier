import { Router } from "express";
import {
  getUser,
  getUserById,
  getUsers,
} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/me", getUser);
userRouter.get("/:id", getUserById);
userRouter.post("/", (req, res) => res.send({ title: "POST/users" }));
userRouter.put("/:id", (req, res) => res.send({ title: "PUT/users/:id" }));
userRouter.delete("/:id", (req, res) =>
  res.send({ title: "DELETE/users/:id" }),
);

export { userRouter };
