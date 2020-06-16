console.log("js_hw_t3");

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const userInput = prompt("Введите пароль");

if (userInput === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!'
}
else if (userInput === null) {
  message = 'Отменено пользователем!'
}
else {
  message = 'Доступ запрещен, неверный пароль!'
}

alert(message);