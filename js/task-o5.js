console.log("js_hw_t5");

const userInput = prompt("Введите страну получателя");

let cost;
let country;

if (userInput === null) {
  alert("Отмена пользователем");
} else if (userInput < 1) {
  alert("Вы не ввели страну получателя. Попробуйте еще раз");
} else {
  switch (userInput.toLowerCase()) {
    case "Китай".toLowerCase():
      cost = 100;
      country = "Китай";
      break;

    case "Чили".toLowerCase():
      cost = 250;
      country = "Чили";
      break;

    case "Австралия".toLowerCase():
      cost = 170;
      country = "Австралия";
      break;

    case "Индия".toLowerCase():
      cost = 80;
      country = "Индия";
      break;

    case "Ямайка".toLowerCase():
      cost = 120;
      country = "Ямайка";
      break;

    default:
      alert('В вашей стране доставка не доступна')
  };
  alert(`Доставка в ${country} будет стоить ${cost} кредитов`)
}
