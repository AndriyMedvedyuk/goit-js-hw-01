console.log("js_hw_t6");

let input;
let total = 0;

do {
  input = prompt('Введите любое число');

  if(!isNaN(input)) {
    total += Number(input);
  } else {
    alert('Было введено не число, попробуйте еще раз')
  }
} while (input !==null)

alert(`Общая сумма чисел равно ${total}`)