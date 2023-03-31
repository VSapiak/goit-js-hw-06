// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const fornSizeControl = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

const firstCallback = () => {
  textSpan.style.fontSize = `${fornSizeControl.value}px`;
};

fornSizeControl.addEventListener("input", firstCallback);
