const mongoose = require("mongoose");

// Define the schema
const secureSchema = mongoose.Schema({
  studentId: [Number],
  username: String,
  password: String,
});

// Register each model with Mongoose.
// There's no need to export here because mongoose is a singleton
mongoose.model("Secure", secureSchema);