const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const siteSchema = new Schema({
  name: { type: String },
  createdOn: { type: Date, default: new Date() },
  assignedTo: { type: String },
  employees: [{ type: String }],
});

module.exports = model("Site", siteSchema);

// employees: [
//   {
//     type: Schema.Types.ObjectId,
//     ref: "Employee",
//   },
// ],
