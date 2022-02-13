import HomeView from "./views/HomeView.js";
import "./style.css";
import slugify from "slugify";

const req = new XMLHttpRequest();

req.open("GET", "/data");
req.addEventListener("load", onLoad);

req.send();

const pathToRegex = (path) =>
	new RegExp("^" + path.replace(/:\w+/g, "(.+)") + "$");

async function onLoad() {
	const data = JSON.parse(this.responseText);
	console.log(slugify("hello world"));

	const routes = [
		{ path: "/", view: HomeView },
		// { path: "/:title", view: ArticleView },
	];

	const potentialMatches = routes.map((route) => {
		return {
			route: route,
			result: location.pathname.match(pathToRegex(route.path)),
		};
	});

	let match = potentialMatches.find(
		(potentialMatch) => potentialMatch.result !== null
	);

	const view = new match.route.view(data);

	document.querySelector("#root").innerHTML = await view.getHtml();
}
