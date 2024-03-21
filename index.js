const express = require("express");

const app = express();
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const employeeRoutes = require("./routes/employeeRoutes");

const mongoose = require("mongoose");
const connectDB = require("./config/dbConn");

// database connection helper function
connectDB();

// parse data from body
app.use(express.json());
// allow access from other origins
app.use(cors());

// application routes
app.use("/api/auth", authRoutes);
app.use("/api/employees", employeeRoutes);

// root route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "DMA Employee MGT system Root Route",
  });
});

// mongoose connection event listener
const db = mongoose.connection;

db.once("open", () => {
  // console.log(process.env.NODE_ENV);
  console.log("DB connection Established");
  app.listen(3000, () => console.log(`Server running on port 3000`));
});

db.on("error", (err) => {
  console.log("connection error");
  console.log(err);
});
