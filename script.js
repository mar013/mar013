let box = document.querySelector(".color");
let input = document.querySelector(".colorInput");
let bg = document.querySelector("body");
let clearBut = document.querySelector(".btn");

input.addEventListener("input", () => {
    box.style.borderRadius = input.value;
    box.style.background = input.value;
    bg.style.background = input.value;
})

clearBut.addEventListener("click", () => {
    input.value = "";
    box.style.borderRadius = input.value;
    box.style.background = input.value;
    bg.style.background = input.value;
})