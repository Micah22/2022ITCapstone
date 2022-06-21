const mongoose = require("mongoose");

// Define the schema
const adminSchema = mongoose.Schema({
  adminId: [Number],
  username: String,
  name: String
});

// Register each model with Mongoose.
// There's no need to export here because mongoose is a singleton
mongoose.model("Admin", adminSchema);