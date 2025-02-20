// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

const ulList = (text) =>{
    document.write(`<ul>`)
    for(let i = 0; i < 3; i++){
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
ulList('Kokos');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом

const ulListNumber = (number,info) =>{
    document.write(`<ul>`)
    for(let i = 0; i < `${number}`; i++){
        document.write(`<li>${info}</li>`);
    }
    document.write(`</ul>`)
}
ulListNumber(7,'Vasya');

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arrayElements=[721, 'Abrikos', true];

const array = arr =>{
    document.write(`<ul>`)
    for (let i = 0; i < arr.length; i++){
        document.write(`<li>${arr[i]}</li>`)
    }
    document.write(`</ul>`)
}
array(arrayElements)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let object = [{id:1337, name:'Coca-Cola', age: 1000}]

const cocaCola = obj =>{
    document.write(`<div>`)
    for (let o of obj){
        document.write(`<p>${o.id},</p>
                       <p>${o.name},</p> 
                        <p>${o.age}</p>
                       `)
    }
    document.write(`</div>`)
    return document;
}
cocaCola(object)