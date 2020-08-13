function gen() {
	if (document.getElementById("basic").checked) var chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	if (document.getElementById("medium").checked) var chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
	if (document.getElementById("hard").checked) var chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', "'", "&", "#", "{", "}", "(", ")", "[", "]", "@", "_", "-", "?", ",", ".", ";", "/", ":", "!"];

	const length = document.getElementById("length").value;
    
	if (isNaN(length)) {
		alert("Length must be a number!");
		return;
	}
	
	if (length >= 2049) {
		alert("There are too many characters. The limit is 2048.")
		return;
	}

	if (length < 8) {
		alert("There's not enough characters! You can't go any lower than 8.")
		return;
	}
	
	var output = "";
	while (output.length < length) { 
		output += chars[Math.floor(Math.random() * chars.length)]; 
	}
	
	document.getElementById("output").innerText = output;
	document.getElementById("generate").style.color = "#33FF33";
	document.getElementById("generate").style.borderColor = "#33FF33";

	setTimeout(() => {
		document.getElementById("generate").style.color = "white";
		document.getElementById("generate").style.borderColor = "white";
	}, 1000);
};

function copy() {
	let output = document.getElementById("output");
	if (output.value === undefined || output.value === ""){
		output.value = "No password was generated.";
	}

	document.getElementById("copy").style.color = "#33FF33";
	navigator.clipboard.writeText(output.value);

	setTimeout(() => {
		document.getElementById("copy").style.color = "white";
	}, 1000);
}

function reveal() {
	let output = document.getElementById("output");
	if (output.value === undefined || output.value === ""){
		output.value = "No password was generated.";
	}

	document.getElementById("reveal").style.color = "#33FF33";
	navigator.clipboard.writeText(output.value);

	document.getElementById("output").style.display = "inline";

	setTimeout(() => {
		document.getElementById("reveal").style.color = "white";
	}, 1000);
}

function unreveal() {
	document.getElementById("output").style.display = "none";

	setTimeout(() => {
		document.getElementById("reveal").style.color = "white";
	}, 1000);
}