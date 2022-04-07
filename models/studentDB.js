const mongoose = require("mongoose");

// Define the schema
const studentSchema = mongoose.Schema({
  studentId: [Number],
  username: String,
  name: String,
  year: String,
  classes: [{ courseCode: String, courseName: String, courseGrade: String }],
});

// Register each model with Mongoose.
// There's no need to export here because mongoose is a singleton
mongoose.model("Student", studentSchema);