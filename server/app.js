import express from "express";
import cookieParser from "cookie-parser";
import { PORT } from "./config/env.js";
import { connectToDatabase } from "./database/mongodb.js";
import { authRouter } from "./routes/auth.routes.js";
import { userRouter } from "./routes/user.routes.js";
import { transactionRouter } from "./routes/transaction.routes.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cookieParser());

app.get("/api/health", (req, res) => res.send({title: "up and ready."}));
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/transactions", transactionRouter);

app.use(errorMiddleware);

app.listen(PORT, async () => {
  console.log(`Fiscal Atelier server is running on http://localhost:${PORT}`);
  await connectToDatabase();
});