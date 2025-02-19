// #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

function stringToArray(string){
    return string.split(' ');
}
let str = 'Ревуть воли як ясла повні'
let result = stringToArray(str);
console.log(result)

//
// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let arrNumber = [10,8,-7,55,987,-1011,0,1050,0];
let numberToString = arrNumber.map(number => String(number));
console.log(numberToString);

// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// ==========================

let nums = [11,21,3];
function sortNums(array,direction){
    if (direction === 'ascending'){
        return array.sort((a,b) => a - b);
    } else if (direction === 'descending'){
        return array.sort((a,b) => b - a);
    }
}
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));

// #yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]

// -- відсортувати його за спаданням за monthDuration

let sort = coursesAndDurationArray.sort((firstMonth,secondMonth) =>{
    return secondMonth.monthDuration - firstMonth.monthDuration
});
console.log(sort);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filter = coursesAndDurationArray.filter((course) => course.monthDuration > 5)
console.log(filter)

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let mapArr = coursesAndDurationArray.map((item,index) => ({id:index, title:item.title, monthDuration:item.monthDuration}))
console.log(mapArr)