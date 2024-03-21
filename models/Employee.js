const mongoose = require("mongoose");

const { Schema } = mongoose;

const employeeSchema = new Schema({
  name: { type: String },
  role: { type: Number },
});

module.exports = mongoose.model("Employee", employeeSchema);

// roles //
// Foreman
// Mason
// Electrician
// Plumber
// Carpenter
// Helper
// Painter
