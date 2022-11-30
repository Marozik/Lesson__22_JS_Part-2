// Строгий режим
"use strict"

// Оператори
// Вариант №1
// console.log('35' + - "22");
// Невірно, оператор "+" складе два рядки, результат буде 35-22

// Вариант №2
// console.log('35' * "22");
// Вірно, оператор "*" переведе рядки в числа і перемножить їх, резудьтат 770

// Вариант №3
// console.log('558' > 22++);
// Невірно, викличе помилку у консолі, інкремент ++ потрібно додавати до змінної

// let someNum = 22;
// console.log('558' > someNum++);
// Вірний запис

// Вариант №4
// let usersCounter = 0;
// let newUsers = usersCounter++;
// console.log(newUsers);
// Консоль поверне 0
// Щоб консоль повернула 1 інкремент має бути префіксним

// Вариант №5
// console.log(!false && 11 || 18 && !'');
// Консоль поверне 11, спочатку перевіряється !false - поверне true, потім перевіриться && 
// 11 - поверне true, перевірка зупинеться і поверне останнє значення

// Вариант №6
// let name = 0;
// console.log(name ?? "No name");
// Поверне 0, тому що цей операнд не Null і не underfined

// let name;
// console.log(name ?? "No name");
// В такому випадку поверне значення другого ооперанду "No name"
// name = underfined



// IF ELSE
// Вариант №1
/*
if (1 === '1') {
	console.log('Правда!');
} else {
	console.log('Брехня!');
}
// Поверне 'Брехня!', оператор === строгої рівності
*/

// Вариант №2
/*
if (5 == '5') {
	console.log('Правда!');
} else {
	console.log('Брехня!');
}
// Поверне 'Правда!', оператор == перетворює операнди в числа
*/
// Вариант №3
/*
let message = (92 > '11' && 58 < 100) ? 'Правда!' : 'Брехня!';
console.log(message);
// Поверне 'Правда!'
*/

// Вариант №4
/*
if (0) {
	console.log('Брехня!');
} else if(" ") {
	console.log('Правда!');
}
// Поверне 'Правда!'. 0 - поверне false, " " - поверне true, рядок не попожній.
*/


// Цикли For While
// Задача №1
// Вивести в консоль числа від 1 до 5
/*
for (let i = 0; i < 6; i++) {
	console.log(i);
}
*/

// Задача №2
// Останнє число в консолі буле 0, вірно?
/*
let num = 8;
while (num) {
	console.log(num);
	num--;
}
*/
// Останнє число в консолі буде 1. 0 === false

// Задача №3
// Переписати на while
/*
for (let num = 0; num < 3; num++) {
	console.log(`Число: ${num}`);
}
*/
/*
let num = 0;
while (num < 3) {
	console.log(`Число: ${num}`);
	num++;
}
*/

// Задача №4
// Припинити роботу цикла №1 коли size рівна 1
/*
for (let num = 0; num < 2; num++) {
	for (let size = 0; num < 3; size++) {
		console.log(size);
		if (size == 1)break
	}
}
*/

// Числа в JS
// Задача №1
// Отримати правильне значення округлення
// let numOne = Math.round(1.005 * 100) /100;
// console.log(numOne);
// Виведе 1 що невірно 

// let num = 1.005 + Number.EPSILON;
// let numOne = Math.round(num * 100) /100;
// console.log(numOne);
// Вірно

// Задача №2
// Отримати число 135.58 з рядка 
// let value = parseFloat("135.58px");
// console.log(value);

// Задача №3
// Побудувати правильне умовне вітвлення
/*
let value = 58 + "Freelancer";
if (isNaN(value)) {
	console.log('Результат виразу NaN');
}
*/


// Задача №4
// Знайти максимальне число з 10, 58, 39, -150, 0
// console.log(Math.max(10, 58, 39, -150, 0));

// Задача №5
// Округлити число 58.858 до числа 58
// let someNum = Math.floor(58.858);
// console.log(someNum);
// Консоль виведе 58


// Рядки в JS
// Задача №1
// Чи правильний запис
// let fls = "freelancer";
// let text = 'Hello! I am a ${fls}';
// Цей запис невірний, потрібно використовувати зворотні лапки

// let fls = "freelancer";
// let text = `Hello! I am a ${fls}`;
// console.log(text);
// Вірний запис

// Задача №2
// Отримати символ "n" рядку:
// let text = 'freelancer';
// console.log(text[6]);

// Задача №3
// Вірно? 
// let text = 123 + '456';
// Очікуємо 579
// console.log(text);
// Невірно, оператор + з'єднає два рядки, він не перетворює тип даних

// Задача №4
// Отримати рядок у верхньому регістрі
// let text = 'freelancer';
// let result = text.toUpperCase();
// console.log(result);

// Задача №5
// Отримати підрядок "lan" з:
// let text = 'freelancer';
// console.log(text.slice(4, 7));

// Задача №6
// true чи false? 
// let text = 'фрілансер';
// console.log(text.includes('лан', 4));
// false