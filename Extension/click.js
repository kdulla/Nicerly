console.log("HELLO WORLD")
setInterval(function(){
	 var temp = document.getElementsByClassName("_1mf _1mj")[0];
	 if (temp != null){
	 var tex = temp.children[0].textContent;
	
	 if (tex != null) {
		 console.log(tex);
		 if (document.getElementById("added") == null){
			var div = document.createElement("div");
			div.id = "added"
		 }
		 else{
			 var div = document.getElementById("added");
		 }
		 div.className = "speech-bubble";
		 div.innerHTML = tex;
		 document.body.appendChild(div);
		 }
	}
}, 4000);
