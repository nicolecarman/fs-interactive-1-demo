console.log("JavaScript has been connected.");

// STEP 1: Grab the HTML element
const plusBtn = document.querySelector("#plus-btn");
const resetBtn = document.querySelector("#reset-btn");
const minusBtn = document.querySelector("#minus-btn");
const counterText = document.querySelector("#counter");
const themeBtns = document.querySelectorAll(".theme-buttons")
const inputBox = document.querySelector("#input-box");
const inputBtn = document.querySelector("#input-submit");



// STEP 2: Write out your callback function
let count = 0;

function increase() {
    count++;
    console.log(count);
    counterText.textContent = count;
}

function reset() {
    count = 0;
    console.log(count);
}

function decrease() {
    count--;
    console.log(count);
    counterText.textContent = count;
}

function selectTheme(event) {
    console.log(event.target.textContent);
    let theme = event.target.textContent;
    
    
    document.querySelector("body").className = theme;
    document.querySelector("main").className = theme;

    const buttons = document.querySelectorAll("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = theme;
    }
}

// gets the value (whatever was typed) from the input box
function logInputValue() {
    console.log(inputBox.value);
}



// STEP 3: Combine your element and function using addEventListener
// Arguments for addEventListener: (event, callback)
plusBtn.addEventListener("click", increase);
resetBtn.addEventListener("click", reset);
minusBtn.addEventListener("click", decrease);
inputBtn.addEventListener("click", logInputValue);

for (let i = 0; i < themeBtns.length; i++) {
    themeBtns[i].addEventListener("click", selectTheme);
}