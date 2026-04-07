import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { PORT } from "./config/env.js";
import { connectToDatabase } from "./database/mongodb.js";
import { authRouter } from "./routes/auth.routes.js";
import { userRouter } from "./routes/user.routes.js";
import { transactionRouter } from "./routes/transaction.routes.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import { authorizeUser } from "./middlewares/auth.middleware.js";

const app = express();

const allowedOrigins = ["http://localhost:5173"];

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(cors({
//   origin: "http://localhost:5173",
//   credentials: true,
// }));
app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like mobile apps or curl)
      // allow Postman, HTTPie, and server-to-server requests
      if (!origin) return callback(null, true);

      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  }),
);

app.get("/api/health", (req, res) => res.send({ title: "up and ready." }));
app.use("/api/auth", authRouter);

app.use(authorizeUser);
app.use("/api/users", userRouter);
app.use("/api/transactions", transactionRouter);

app.use(errorMiddleware);

app.listen(PORT, async () => {
  console.log(`Fiscal Atelier server is running on http://localhost:${PORT}`);
  await connectToDatabase();
});
