const express = require("express");
const { connection, News } = require("./mongodb");
const newsRouter = require("./Route/news");
const cors = require("cors");
// const mongoose = require("mongoose");
//const connection = require("./storage/db");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.use("./news", newsRouter);
app.use("./news", newsRouter);

// const NewsSchema = new mongoose.Schema({
//   Title: String,
//   Description: String,
//   Date: Date,
//   Author: [String],
//   Location: [String],
//   tags: [String],
//   TotalView: Number,
//   Category: [String],
// });

// const News = mongoose.model("News", NewsSchema);

// async function main() {
//   const conn = await mongoose.connect("mongoose://localhost8080/website");
//   console.log("Connected");

//   const news = new News({
//     Title: "The cars, trucks and SUVs with the best resale value",
//     Description:
//       "These vehicles retain their value better than 95% of all other models. The list includes EVs, minivans and the two brands that retain value best.",
//     Date: new Date(),
//     Author: "Allyson Harwood",
//     Location: "NeyYork",
//     tags: ["Politician", "Sports"],
//     TotalView: 120,
//     Category: ["Trending", "Top"],
//   });

//   await news.save();

//   conn.disconnect();
// }
// main();

app.listen(8080, async () => {
  try {
    await coonection;
    console.log("connected to Db");
  } catch (e) {
    console.log("Server is not started");
  }
});
