const mongoose = require("mongoose");
const connection = mongoose.connect("mongodb://localhost:27017/News");

const newsSchema = new mongoose.Schema({
  Title: String,
  Description: String,
  Date: Date,
  Author: [String],
  Location: [String],
  tags: [String],
  TotalView: Number,
  Category: [String],
});

const News = new mongoose.model("news", newsSchema);

module.exports = { connection, News };
