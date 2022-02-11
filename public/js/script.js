const req = new XMLHttpRequest();

req.open("GET", "/data");
req.addEventListener("load", onLoad);

req.send();

function onLoad() {
	const response = this.responseText;
	const parsedResponse = JSON.parse(response);
	console.log(parsedResponse);
}
