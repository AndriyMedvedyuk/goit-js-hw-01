console.log("js_hw_t2");

const total = 100;
// const ordered = 50;
// const ordered = 20;
const ordered = 80;
// const ordered = 130;

let message;

if (ordered <= total) {
  message = "Заказ оформлен, с вами свяжется менеджер";
} else {
  message = "На складе недостаточно твоаров!";
}

console.log(message);
