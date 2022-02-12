const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Article = require("./models/article");

const app = express();
const port = 5000;

mongoose.connect("mongodb://localhost:27017/blog");

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname + "/client/index.html"));
});

app.get("/data", async (req, res) => {
	const articles = await Article.find();
	res.json(articles);
});

app.use(express.static(path.resolve(__dirname, "client", "public")));

app.listen(port, () => {
	console.log(`App started on port ${port}`);
});
