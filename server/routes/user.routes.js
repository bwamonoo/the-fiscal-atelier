import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => res.send({title: "GET/users"}));
userRouter.get("/:id", (req, res) => res.send({title: "GET/users/:id"}));
userRouter.post("/", (req, res) => res.send({title: "POST/users"}));
userRouter.put("/:id", (req, res) => res.send({title: "PUT/users/:id"}));
userRouter.get("/:id", (req, res) => res.send({title: "DELETE/users/:id"}));

export { userRouter };