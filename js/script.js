let optionsButtons = document.querySelectorAll(".option-button");
let advancedOptionButton = document.querySelectorAll(".adv-option-button");
let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("text-input");
let linkButton = document.getElementById("createLink");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");

//List of fontlist
let fontList = [
  "Arial",
  "Verdana",
  "Times New Roman",
  "Garamond",
  "Georgia",
  "Courier New",
  "cursive",
];

fontList.map((font) => {
  let option = document.createElement("option");
  option.value = font;
  option.innerText = font;
  fontName.appendChild(option);
})

for(let i = 1; i <= 7; i++) {
  let option = document.createElement("option");
  option.value = i;
  option.innerText = i;
  fontSizeRef.appendChild(option);
}

function applyFormats(command, defaultUi, value) {
  document.execCommand(command, defaultUi, value);
}

// format Buttons hight light 
optionsButtons.forEach((button) => {
  button.onclick = () => {
    button.classList.toggle("active");
      let buttonId = button.id;
      applyFormats(buttonId, false, null) 
  }
})

advancedOptionButton.forEach((button) => {
  button.onchange = () => {
    applyFormats(button.id, false, button.value)
  }
})

// link creation  
linkButton.addEventListener("click", () => {
  let userLink = prompt("Enter a URL");
  //if link has http then pass directly else add https
  if (/http/i.test(userLink)) {
    modifyText(linkButton.id, false, userLink);
  } else {
    userLink = "http://" + userLink;
    modifyText(linkButton.id, false, userLink);
  }
});