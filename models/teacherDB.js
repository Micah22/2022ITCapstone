const mongoose = require("mongoose");

// Define the schema
const teacherSchema = mongoose.Schema({
  teacherId: [Number],
  name: String,
  username: String,
  classes: [{ courseCode: String, courseName: String}],
});

// Register each model with Mongoose.
// There's no need to export here because mongoose is a singleton
mongoose.model("Teacher", teacherSchema);