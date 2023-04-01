// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

//     Розміри найпершого <div> - 30px на 30px.
//     Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
//     Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Створює діви
function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const divElement = document.createElement("div");
    divElement.style.width = `${size}px`;
    divElement.style.height = `${size}px`;
    divElement.style.backgroundColor = getRandomHexColor();
    boxes.append(divElement);
    size += 10;
  }
}

// Очищення вмісту, видаляє всі елементи
function destroyBoxes() {
  boxes.innerHTML = "";
}

// Для створення контейнеру
const firstCallback = () => {
  const amount = Number(input.value);
  createBoxes(amount);
};

// Для видлаення контейнеру
const secondCallback = () => {
  destroyBoxes();
};

// Колбек створення
createBtn.addEventListener("click", firstCallback);
// Колбек видалення
destroyBtn.addEventListener("click", secondCallback);

// 2 варіант

// const input = document.querySelector("input");
// const createBtn = document.querySelector("[data-create]");
// const destroyBtn = document.querySelector("[data-destroy]");
// const boxes = document.querySelector("#boxes");

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// let size = 30;
// const scale = 1.1;
// // Створює діви
// function createBoxes(amount) {
//   // let size = 30;
//   // const scale = 1.1;
//   for (let i = 0; i < amount; i++) {
//     const divElement = document.createElement("div");
//     divElement.style.width = `${size}px`;
//     divElement.style.height = `${size}px`;
//     divElement.style.backgroundColor = getRandomHexColor();
//     boxes.append(divElement);
//     size *= scale;
//   }
// }

// // Очищення вмісту, видаляє всі елементи
// function destroyBoxes() {
//   boxes.innerHTML = "";
// }

// // Для створення контейнеру
// const firstCallback = () => {
//   const amount = Number(input.value);
//   createBoxes(amount);
// };

// // Для видлаення контейнеру
// const secondCallback = () => {
//   destroyBoxes();
// };

// // Колбек створення
// createBtn.addEventListener("click", firstCallback);
// // Колбек видалення
// destroyBtn.addEventListener("click", secondCallback);
