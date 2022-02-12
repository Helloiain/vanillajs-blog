import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
	constructor(params) {
		super(params);
		this.articles = params;
		console.log(params);
	}

	async getHtml() {
		return `
            ${this.articles.map((article) => `<h1>${article.title}</h1>`)}
        `;
	}
}
