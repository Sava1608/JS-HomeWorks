// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function area(a,b){
    return a * b;
}
let S = area(4,6);
console.log(S)

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

function areaRadius(r){
    const PI = 3.14;
    return PI * (r * r);
}

let radius = areaRadius(7)
console.log(radius)

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function areaCylinder(r,h){
    const PI = 3.14;
    return (2 * PI) * (r * r) + (2 * PI) * (r * h);
}
let cylinder = areaCylinder(8,9);
console.log(cylinder)

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

let array = [10,20,30,40,50,60,70,80,90];

function arrayFunction(arr){
    for (let array of arr){
        console.log(array)
    }
}
arrayFunction(array)

// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

function paragraph(text){
    return document.write(`<p>${text}</p>`)
}
paragraph('Hello Okten')

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий

function lists(list){
    document.write(`<ul>`);
        for (let i = 0; i < 3; i++){
            document.write(`<li>${list}</li>`)
        }
    document.write(`</ul>`)
}
lists('Hello')