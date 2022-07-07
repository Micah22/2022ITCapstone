const mongoose = require("mongoose")

// Define the schema
const chatSchema = mongoose.Schema({
  studentId: [Number],
  userName: String,
  message: String
})

mongoose.model("Chat", chatSchema)