//Первое
const num = 500;
console.log(`Двоичное число: ${num.toString(2)}`);
console.log(`Шестнадцатиричное число: ${num.toString(16)}`);

//Второе числа
const x = prompt('Введите значение числа x','');
let resultOne = + x + 2;
console.log(`х + 2 = ${resultOne}`);
let resultTwo = + x - 2;
console.log(`х - 2 = ${resultTwo}`);
let resultThree = + x * 2;
console.log(`х * 2 = ${resultThree}`);
let resultFour = + x / 2;
console.log(`х / 2 = ${resultFour}`);

//Третье длина строки
const someString = prompt('Введите текст','');
console.log(`Длина строки: ${someString.length}`);

//Число 0,51000002
let number = 0.51000002;
console.log(+(number.toFixed(2)) + 2);

// Строки
const str = "the quick brown fox jumps over the lazy dogs back";
const str_two = 'brown fox jumps';
console.log(str.indexOf("brown fox jumps", 0));
console.log(str.toUpperCase());

//Логические операции
const a = 1,
  b = 2,
  c = 3,
  d = 3;
let comareOne = a < b || a < c;
let compareTwo = b < c || c >= c;
let comareThre = c >= c || c == d;
console.log(Boolean(comareOne || compareTwo || comareThre));

let comareFour = a < b && a < c;
let comareFive = b < c && c >= c;
let compareSix = c >= c && c == d;
console.log(Boolean(comareFour && comareFive && compareSix));

//Творческое задание
console.log(
  `Строгое равно- ${
    1 === 1
  }, не строгое равно позволяет сравнивать разные типы данных- ${1 == "1"}`
);
console.log(
  `Строгое равно- ${
    1 === 2
  }, не строгое равно позволяет сравнивать разные типы данных- ${1 == "2"}`
);

// Оператор ??

let age;
console.log(age ?? "NoAge");
age = 35;
console.log(age ?? "NoAge");
