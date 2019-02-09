console.log("HELLO WORLD")
setInterval(function(){
	 var temp = document.getElementsByClassName("_1mf _1mj")[0];
	 if (temp != null){
	 var tex = temp.children[0].textContent;
	
	 if (tex != null) {console.log(tex)};}
}, 4000);

const Http = new XMLHttpRequest();
const url='https://nicerly.azurewebsites.net/analyze?message=';
Http.open("GET", url);
Http.send();
Http.onreadystatechange=(e)=>{
console.log(Http.responseText)
}