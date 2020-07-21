const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");

button.addEventListener("click", function() {
	if (input.value.length > 0) {
	const li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	}
})

input.addEventListener("keypress", function(event) {
	if (input.value.length > 0 && event.keyCode === 13) {
	const li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	}
})