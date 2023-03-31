// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const textInput = document.getElementById("name-input");
const outputSpan = document.getElementById("name-output");

// textInput.addEventListener("input", (e) => {
//   if (textInput.value === "") {
//     outputSpan.textContent = "Anonymous";
//   } else {
//     outputSpan.textContent = e.currentTarget.value;
//   }
// });
textInput.addEventListener("input", (e) => {
  textInput.value === ""
    ? (outputSpan.textContent = "Anonymous")
    : (outputSpan.textContent = e.currentTarget.value);
});
