const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

// global middleware
app.use(cors());
app.use(express.json());

// routes
// app.use("/",myRoute)

app.get("/", (req, res) => {
  res.send("hello from server");
});

// catch all route error
app.use((req, res, next) => {
  // error defined by us
  const err = new Error("404 not found");
  err.status = 404;
  next(err);
});

// global error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});

app.listen(port, () => {
  console.log("Server started on", port);
});
