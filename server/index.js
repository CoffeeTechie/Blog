const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./db");
const postRouter = require("./routes/post-router");

const app = express();
const apiPort = process.env.PORT || 3000;

//Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("connected to db");
});

//route
app.get("/", (req, res) => {
  res.send("Hey there Mel, you never get tired of greeting yaself.");
});

app.use("/api", postRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
