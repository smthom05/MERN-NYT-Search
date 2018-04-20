const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Articles collection and inserts the articles below
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/articlesDB");

  const bookSeed = [
    {
      title: "Article #1",
      url: "Article#1.com",
      synopsis:
        "Article #1 synopsis",
      date: new Date(Date.now())
    },
    {
      title: "Article #2",
      url: "Article#2.com",
      synopsis:
        "Article #2 synopsis",
      date: new Date(Date.now())
    },
    {
      title: "Article #3",
      url: "Article#3.com",
      synopsis:
        "Article #3 synopsis",
      date: new Date(Date.now())
    }
  ];

  db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
