const express = require("express");
const appRouter = express.Router();

const investorRoutes = require("./investor-routes");
//Other routes

appRouter.use("/investor", investorRoutes);
module.exports = appRouter;
