const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	const li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	//delete button
	const trashButton = document.createElement('button');
	trashButton.innerHTML = `&#10006`;
	trashButton.classList.add("trash-btn");
	//append to list
	li.appendChild(trashButton);
	//clear todo input value
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) 
	createListElement();
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13)
	createListElement();
}

function deleteItem(e) {
	const item = e.target;
	//delete todo
	if (item.classList[0] === "trash-btn") {
		const todo = item.parentElement;
		todo.remove();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", deleteItem);