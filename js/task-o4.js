console.log("js_hw_t4");

let credits = 23580;
const pricePerDroid = 3000;
let message;
const userInput = prompt('Какое кол-во дроидов вы хотите купить,')

if (userInput === null) {
  message = 'Отменено пользователем!'
} else if (userInput < 1) {
  message = 'Вы не ввели кол-во дроидов. Повторите заказ.'
} else {
  const totalPrice = Number(userInput) * pricePerDroid;
  message = `Общая сумма заказа - ${totalPrice}`;
  alert(message);

  if (totalPrice > credits) {
    message = 'Недостаточно средств на счету!'
  } else {
    credits = credits - totalPrice;
    message = `Вы купили ${userInput} дроидов, на счету осталось ${credits} грн`
  }
}
alert(message)