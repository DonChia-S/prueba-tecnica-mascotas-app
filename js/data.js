"use strict";

const accounts = {
  usurname: "usuario1111",
  pin: 1111,
};

const inputLoginUsername = document.getElementById("usurname");
const inputLoginPin = document.getElementById("pwd");
const btnLogin = document.querySelector(".btn-login");

let currentAccount;

btnLogin.addEventListener(`click`, function (e) {
  //evitar que el form recargue la pagina
  e.preventDefault();

  currentAccount = accounts.usurname === inputLoginUsername.value;

  console.log(accounts);
  console.log(inputLoginUsername.value);
  console.log(Number(inputLoginPin.value));

  if (
    accounts.usurname === inputLoginUsername.value &&
    accounts.pin === Number(inputLoginPin.value)
  )
    location.href = "menu.html";
});
