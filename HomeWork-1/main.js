// #dYQNrBV
// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let word1 = "hello";
console.log(word1);
let word2 = "owu";
console.log(word2);
let word3 = "com";
console.log(word3);
let word4 = "ua";
console.log(word4);

let number1 = 1;
console.log(number1);
let number2 = 10;
console.log(number2);
let number3 = -999;
console.log(number3);
let number4 = 123;
console.log(number4);

const PI = 3.14;
console.log(PI);

let number5 = 2.7;
console.log(number5);
let number6 = 16;
console.log(number6);

let boolean1 = true;
console.log(boolean1);
let boolean2 = false;
console.log(boolean2);

// #6Qb97gsv
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Yaroslav';
let middleName = 'Orestovich';
let lastName = 'Baran';
let person = (`${firstName} ${middleName} ${lastName}`);
console.log(person);

// #4N0y5tufA
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// #ruUtWDUI
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let Name = prompt('Name')
let fatherName = prompt('FatherName')
let age = prompt('Age')
console.log(`${Name} ${fatherName} ${age}`)