// Напиши скрипт управління формою логіна.

//     Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
//     Під час відправлення форми сторінка не повинна перезавантажуватися.
//     Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
//     Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
//     Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const formLogin = document.querySelector(".login-form");

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputEmail = formLogin.elements.email;
  const inputPassword = formLogin.elements.password;

  if (!inputEmail.value || !inputPassword.value) {
    alert("Будь ласка, заповніть всі поля.");
  } else {
    const formDate = {
      email: inputEmail.value,
      password: inputPassword.value,
    };
    console.log(formDate);
    formLogin.reset();
  }
});
