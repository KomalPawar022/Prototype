const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const Investor = new Schema({
  email: Schema.Types.String,
  password: Schema.Types.String,
  contact: Schema.Types.Number,
  profilePic: Schema.Types.String,
  residentialStatus: Schema.Types.String,
  dob: Schema.Types.Date,
  profession: Schema.Types.String,
  organization: Schema.Types.String,
  father: Schema.Types.String,
  country: Schema.Types.String,
  pin: Schema.Types.String,
  address: Schema.Types.String,
  landmark: Schema.Types.String,
  city: Schema.Types.String,
  state: Schema.Types.String,
  docType: Schema.Types.String,
  docNumber: Schema.Types.String,
  docFront: Schema.Types.String,
  docBack: Schema.Types.String,
  panFront: Schema.Types.String,
  IFSC: Schema.Types.String,
  accNo: Schema.Types.String,
  bankDoc: Schema.Types.String,
  bankName: Schema.Types.String,
  Investment: [
    {
      project: Schema.Types.String,
      location: Schema.Types.String,
      desc: Schema.Types.String,
      sqft: Schema.Types.String,
      price: Schema.Types.Number,
      doc: Schema.Types.String,
    },
  ],
  Watchlist: [Schema.Types.String],
  Transactions: [
    {
      id: Schema.Types.String,
      date: Schema.Types.Date,
      property: Schema.Types.String,
      desc: Schema.Types.String,
      type1: Schema.Types.String,
      type2: Schema.Types.String,
      amount: Schema.Types.Number,
      receipt: Schema.Types.String,
    },
  ],
  Nominees: [
    {
      profileName: Schema.Types.String,
      propertyName: Schema.Types.String,
      nomineeName: Schema.Types.String,
      status: Schema.Types.String,
    },
  ],
  Form15: [
    {
      year: Schema.Types.String,
      doc: Schema.Types.String,
    },
  ],
});
module.exports = mongoose.model("Investor", Investor);
