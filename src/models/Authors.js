import mongoose from "mongoose";
const authorSchema = new mongoose.Schema({
    _id: {
      type: Number,
      required: true,
    },
    
    name: {
      type: String,
      required: true
    }
  });

const authors = mongoose.model("Authors", authorSchema);
module.exports = authors; 