const app = require("./app");
const connectToDatabase = require("./db/connection");
require("./db/connection");
app.listen(3001, () => {
  console.log("Server Open & Connected To Database 🤟");
});
