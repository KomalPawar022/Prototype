const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://gauripawar022:BsBMql0SQjPeSJsW@cluster0.sltbhau.mongodb.net/ARBM?retryWrites=true&w=majority&appName=Cluster0",
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((e) => console.log(e));
