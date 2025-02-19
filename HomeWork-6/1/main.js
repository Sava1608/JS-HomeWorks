// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let stringValue1 = ['hello world'];
let stringValue2 = ['lorem ipsum'];
let stringValue3 = ['javascript is cool'];
stringValue1.forEach(string => console.log(string.length));
stringValue2.forEach(string => console.log(string.length));
stringValue3.forEach(string => console.log(string.length));

// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let upperString1 = 'hello world';
let upperString2 = 'lorem ipsum';
let upperString3 = 'javascript is cool'
console.log(upperString1.toUpperCase());
console.log(upperString2.toUpperCase());
console.log(upperString3.toUpperCase());

// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let lowerString1 = 'HELLO WORLD';
let lowerString2 = 'LOREM IPSUM';
let lowerString3 = 'JAVASCRIPT IS COOL';
console.log(lowerString1.toLowerCase());
console.log(lowerString2.toLowerCase());
console.log(lowerString3.toLowerCase());

// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
console.log(str.substring(str.indexOf(' ',0), str.indexOf(' ',7)))