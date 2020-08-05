const passSimple = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const passDifficult = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', "'", "&", "#", "{", "}", "(", ")", "[", "]", "@", "_", "-", "?", ",", ".", ";", "/", ":", "!"];
const passMedium = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

function gen() {

  const basic = document.getElementById("basic");
  const medium = document.getElementById("medium");
  const hard = document.getElementById("hard");
  const length = document.getElementById("length").value;
  
  if(basic.checked === true){
    
    if(isNaN(length)){
      alert("Length must be a number!");
      return;
    }
    
    if(length > 2049 || length === 2049){
      alert("There are too many characters. The limit is 2048.")
      return;
    }
    if(length < 8){
      alert("There's not enough characters! You can't go any lower than 8.")
      return;
    }
    
    var basic_output = "";
    while (basic.length < length) { basic += passSimple[Math.floor(Math.random() * passSimple.length)]; }
    
    // show password
    document.getElementById("output").innerHTML = `${basic_output}`;
    return;
    
  }
  
  if(medium.checked === true){
    
    if(isNaN(length)){
      alert("Length must be a number!");
      return;
    }
    
    if(length > 2049 || length === 2049){
      alert("There are too many characters. The limit is 2048.")
      return;
    }
    if(length < 8){
      alert("There's not enough characters! You can't go any lower than 8.")
      return;
    }
    
    var medium_output = ""
    while (medium_output.length < length) { medium_output += passMedium[Math.floor(Math.random() * passMedium.length)]; }
    
    // show the final password.
    document.getElementById("output").innerHTML = `${medium_output}`
    document.getElementById("output").innerHTML = medium_output;
    return;
    
  }
  
  if(hard.checked === true){
    
    if(isNaN(length)){
      alert("Length must be a number!");
      return;
    }
    
    if(length > 2049 || length === 2049){
      alert("There are too many characters. The limit is 2048.")
      return;
    }
    if(length < 8){
      alert("There's not enough characters! You can't go any lower than 8.")
      return;
    }
    
    var hard_output = ""
    while (hard_output.length < length) { hard_output += passDifficult[Math.floor(Math.random() * passDifficult.length)]; }
    
    // show the final password
    document.getElementById("output").innerHTML = `${hard_output}`
    document.getElementById("output").innerHTML = hard_output;
    return;
    
  }

};

function copy() {
  var text = document.getElementById("output").innerHTML;
  if(text === "Placeholder" || !text){
    alert("Password is not generated!");
    return;
  }
  navigator.clipboard.writeText(text)
  alert("Successfully copied the password to your clipboard!")
}

// reveal
function reveal() {
  var out = document.getElementById("output");
  if(out.innerHTML === "Placeholder"){
    alert("Nothing to reveal.")
    return;
  }
  out.style.color = "black";
}

// don't reveal
function unreveal() {
  var out = document.getElementById("output");
  out.style.color = "white";
}
