const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/posts", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

db.on("connecting", () => {
  console.log("mongoose connecting to the mongodb");
});

module.exports = db;
