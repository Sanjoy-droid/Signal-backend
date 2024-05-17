// index.js
require("dotenv").config();
const connectToMongo = require("./db");
// const messageRoutes = require("./routes/message.routes.js");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParser());
app.use(cors());

connectToMongo();

// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/messages", require("./routes/message.routes.js"));
app.use("/api/users", require("./routes/user.routes.js"));

app.get("/hello", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
