console.log("HELLO WORLD")
setInterval(function(){
	var temp = document.getElementsByClassName("_1mf _1mj")[0];
	if (temp != null) {
		var tex = temp.children[0].textContent;

		if (tex != null) {
			getNiceness(tex);
		}
	}
}, 400);

function getNiceness(message) {
	const Http = new XMLHttpRequest();
	const url='https://nicerly.azurewebsites.net/analyze?message=' + message;
	Http.open("GET", url);
	Http.send();
	Http.onreadystatechange = (e) => {
		if (Http.responseText.length != 0) {
			console.log(Http.responseText)
		}
	}
}

