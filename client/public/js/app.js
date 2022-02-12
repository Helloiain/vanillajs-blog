import HomeView from "./views/HomeView.js";

const req = new XMLHttpRequest();

req.open("GET", "/data");
req.addEventListener("load", onLoad);

req.send();

async function onLoad() {
	const data = JSON.parse(this.responseText);

	const routes = [{ path: "/", view: HomeView }];

	const potentialMatches = routes.map((route) => {
		return {
			route: route,
			isMatch: location.pathname === route.path,
		};
	});

	let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

	const view = new match.route.view(data);

	document.querySelector("#root").innerHTML = await view.getHtml();
}
