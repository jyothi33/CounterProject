const dButton = document.querySelector(".decrease");
const rButton = document.querySelector(".reset");
const iButton = document.querySelector(".increase");
const counterValue = document.getElementById("value");

dButton.addEventListener('click', function(){
    counterValue.textContent = counterValue.textContent - 1;
    counterValue.textContent < 0 ? counterValue.style.color = "red":"";
    parseInt(counterValue.textContent) === 0 ? counterValue.style.color = "#000":"";
});

rButton.addEventListener('click', function(){
    counterValue.textContent = 0;
    counterValue.style.color = "#000";
});

iButton.addEventListener('click', function(){
    //The parseInt() function parses a string and returns an integer.
    counterValue.textContent = parseInt(counterValue.textContent) + 1;
    counterValue.textContent > 0 ? counterValue.style.color = "green":"";
    parseInt(counterValue.textContent) === 0 ? counterValue.style.color = "#000":"";
});