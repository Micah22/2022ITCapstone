const mongoose = require("mongoose");

// Define the schema
const adminSchema = mongoose.Schema({
  adminId: [Number],
  username: String,
  name: String
});

mongoose.model("Admin", adminSchema);