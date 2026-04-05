import express from "express";
import { PORT } from "./config/env.js";
import { authRouter } from "./routes/auth.routes.js";
import { userRouter } from "./routes/user.routes.js";


const app = express();

app.get("api/health", (req, res) => res.send({title: "up and ready."}));
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Fiscal Atelier server is running on http://localhost:${PORT}`);
});