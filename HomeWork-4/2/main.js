// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// та виводить його через document.write


function lists(word,number){
    document.write(`<ul>`);
        for (let i = 0; i < number; i++){
            document.write(`<li>${word}</li>`)
        }
    document.write(`</ul>`)
}
lists('Hello', 5)

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write
let array = [1,2,3,'string','hello',false,true];
function elementsOfArr(arr){
    document.write(`<ul>`);
        for (let array of arr){
            document.write(`<li>${array}</li>`)
        }
    document.write(`</ul>`);
}
elementsOfArr(array)

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.

let users = [
    {id:1,name:'Kokos1',age:28},
    {id:2,name:'Kokos2',age:25},
    {id:3,name:'Kokos3',age:20},
    {id:4,name:'Kokos4',age:18},
    {id:5,name:'Kokos5',age:8},
    ]

function usersOfArray(arr){
    for (let array of arr){
        document.write(`<div>`)
            document.write(`<p>${array.id}. ${array.name}. ${array.age}</p>`)
        document.write(`</div>`)
    }
}
usersOfArray(users)

//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

let arrNumber = [312312,54353,756765,42343242,53533,8686];
function findNumb(arr){
    let minNumber = arr[0];
    for (let i = 0; i < arrNumber.length; i++){
        if(arrNumber[i] < minNumber){
            minNumber = arrNumber[i];
        }
    }
    return minNumber;
}
let min = findNumb(arrNumber)
console.log(min)

// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

let arrayOfNumber = [1,2,10];

function sum(arr){
    let result = 0
    for (let i = 0; i < arr.length; i++){
        result += arr[i]
    }
    return result
}
let result = sum(arrayOfNumber)
console.log(result)

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swapArr = [11,22,33,44];

function swap(arr,index1,index2){
    let i = swapArr[index1]
    arr[index1] = arr[index2]
    arr[index2] = i
    return arr
}
let indexSwap = swap(swapArr,0,3)
console.log(indexSwap)