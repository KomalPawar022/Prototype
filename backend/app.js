const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const appRouter = require("./router/index");

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/v1", appRouter);
module.exports = appRouter;
