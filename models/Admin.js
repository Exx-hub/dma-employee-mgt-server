const mongoose = require("mongoose");

const { Schema } = mongoose;

const adminSchema = new Schema({
  email: { type: String },
  password: { type: String },
});

module.exports = mongoose.model("Admin", adminSchema);
