// Логічні розгалуження:
//
//     #bAUsaq6LI
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3


// let x = +prompt('Number')
// if (x !== 0){
//     console.log('Вірно')
// }else {
//     console.log('Не вірно')
// }

// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код,
// який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
//

// let time = +prompt('Time')
//
// if(time >= 0 && time <= 14){
//     console.log('The first half hour');
// }else if(time >= 15 && time <= 29){
//     console.log('The second half hour');
// }else if(time >= 30 && time <= 44){
//     console.log('The third half hour');
// }else if(time >= 45 && time <= 59){
//     console.log('The four half hour');
// }else {
//     console.log('Invalid number')
// }

// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити,
// у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
// let day = +prompt('Day 1-31');
//
// if(day >= 1 && day <= 11){
//     console.log('First half month')
// }else if(day >= 12 && day <= 21){
//     console.log('Second half month')
// }else if(day >= 22 && day <= 31){
//     console.log('Three half month')
// }else {
//     console.log('Error')
// }
// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).

// let day = prompt('Select day name');
// let dayPlan;
//
// switch (day){
//     case 'Monday':
//         dayPlan = 'Monday is work';
//         break;
//     case 'Tuesday':
//         dayPlan = 'Tuesday is gym';
//         break;
//     case 'Wednesday':
//         dayPlan = 'Wednesday is rest';
//         break;
//     case 'Thursday':
//         dayPlan = 'Thursday is work';
//         break;
//     case 'Friday':
//         dayPlan = 'Friday is gym';
//         break;
//     case 'Saturday':
//         dayPlan = 'Saturday is clean and wash'
//         break;
//     case 'Sunday':
//         dayPlan = 'Sunday is rest and party'
//         break;
//     default:
//         dayPlan = 'Error'
// }
// console.log(dayPlan)

//     #uwsz1RnTQJ1
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//

// let number1 = +prompt('First number');
// let number2 = +prompt('Second number');
// let result
//
// if(number1 > number2){
//     result = number1;
//     console.log(result)
// }else if(number2 > number1){
//     result = number2
//     console.log(result)
// }else if(number1 === number2){
//     result = 'Числа рівні'
//     console.log(result)
// }
//         #iBvqtjEm
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"
//         якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті,
//         які приводиться до false, а це 0 null undefined і тд).

let x = false
if(!x){
    x = 'default'
}
console.log(x)