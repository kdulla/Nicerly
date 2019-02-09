console.log("HELLO WORLD")

setInterval(function(){
	var temp = document.getElementsByClassName("_1mf _1mj")[0];
	if (temp != null) {
		var tex = "";
		for (i = 0; i < temp.children.length; i++) { 
			tex += ignoreEmojies(temp.children[i]);
		}
		
		}
		if (tex != null) {
		
		getNiceness(tex, draw_box);
		}

	
}, 400);

function ignoreEmojies(object){
	if (object.className != null && object.className != "_21wj"){
		return object.textContent;
	}
}

function draw_box(value) {
	var message = "";
	if (document.getElementById("added") == null){
		var div = document.createElement("div");
		div.id = "added"
	}
	else{
		var div = document.getElementById("added");
		}
		
	if (value < -30){
		message = "Wow, you seem to be going through alot of effort to be mean here, but CYBERBULLYING IS BAD";
		div.style.backgroundColor = "#B45E67";
		div.style.borderColor = "#B45E67";
	}
	else if (value < -15){
		message = "That seems mean. I really don't think you should send that.";
		div.style.backgroundColor = "#d38585";
		div.style.borderColor = "#d38585";
	}
	else if (value < -5){
		message = "Hey, that seems mean, how would you feel if you received that?";
		div.style.backgroundColor = "#f3c5c5";
		div.style.borderColor = "#f3c5c5";
	}
	else if (value < -1){
		message = "Hey, that doesn't seem very nice!";
		div.style.backgroundColor = "#f3e0e0";
		div.style.borderColor = "#f3e0e0";
	}
	
	div.className = "speech-bubble";
	div.innerHTML = message;
	var coords = document.getElementsByClassName("_1mf _1mj")[0].children[document.getElementsByClassName("_1mf _1mj")[0].children.length - 1].getBoundingClientRect();
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

