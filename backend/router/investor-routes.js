const express = require("express");
const investorRoutes = express.Router();
const {
  investorSignup,
  investorLogin,
  getProperties,
  getInvestorData,
} = require("../controllers/investor-controller");
investorRoutes.post("/signup", investorSignup);
investorRoutes.post("/login", investorLogin);
investorRoutes.get("/getInvestorData", getInvestorData);
investorRoutes.get("/getProperties", getProperties);

module.exports = investorRoutes;
