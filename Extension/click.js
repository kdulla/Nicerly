console.log("HELLO WORLD")
setInterval(function(){
	var temp = document.getElementsByClassName("_1mf _1mj")[0];
	if (temp != null) {
		var tex = temp.children[0].textContent;

		if (tex != null) {
		
		getNiceness(tex, draw_box);
		}

	}
}, 400);

function draw_box(value) {
	var message = "";
	if (value < 0){
		message = "Hey don't you think that might be a bit mean?";
	}
	if (document.getElementById("added") == null){
		var div = document.createElement("div");
		div.id = "added"
	}
	else{
		var div = document.getElementById("added");
		}
	div.className = "speech-bubble";
	div.innerHTML = message;
	var coords = document.getElementsByClassName("_1mf _1mj")[0].children[0].getBoundingClientRect();
	div.style.top = Math.round(coords.bottom - 45).toString() + ".px";
	div.style.left = Math.round(coords.right + 20).toString() + ".px";
	if (message == ""){
	 div.style.display = "none";
	}
	else{
	div.style.display = "block";
	}
	document.body.appendChild(div);
}

function getNiceness(message, callback) {
	const Http = new XMLHttpRequest();
	const url='https://nicerly.azurewebsites.net/analyze?message=' + message;
	Http.open("GET", url);
	Http.send();
	Http.onreadystatechange = (e) => {
		if (Http.responseText.length != 0) {
			callback(Http.responseText)
		}
	}
}

