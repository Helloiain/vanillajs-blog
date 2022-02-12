const { Schema, model } = require("mongoose");

const ArticleSchema = new Schema({
	title: { type: String, required: true },
	description: { type: String },
	markdown: { type: String, required: true },
	createdAt: { type: Date, default: Date.now },
	tags: { type: Array, required: true },
});

const Article = model("Article", ArticleSchema);

module.exports = Article;
