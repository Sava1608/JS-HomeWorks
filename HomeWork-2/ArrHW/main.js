// Масиви та об'єкти
// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let defaultArr = [1,2,3,false,true,'string',4,5,6,7];
console.log(defaultArr[0])
console.log(defaultArr[1])
console.log(defaultArr[2])
console.log(defaultArr[3])
console.log(defaultArr[4])
console.log(defaultArr[5])
console.log(defaultArr[6])
console.log(defaultArr[7])
console.log(defaultArr[8])
console.log(defaultArr[9])
console.log(defaultArr);
// #LARqoUj5I
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
//

let book1 =
    {
        title:'Very good Book',
        pageCount:100,
        genre:'Fantasy'
    }
console.log(book1);
let book2 =
    {
        title:'Bad Book',
        pageCount:1,
        genre:'NaN'
    }
console.log(book2);
let book3 =
    {
        title: 'Book',
        pageCount: 1000,
        genre:'JustBook'
    }
console.log(book3)

//     #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом.
// Кожен автор має поля name та age.

let author1 =
    {
        title: 'Book1',
        pageCount: 300,
        genre: 'Fantasy',
        authors:['Incognito','Steven King']
    }
console.log(author1);
let author2 =
    {
        title: 'Book2',
        pageCount: 200,
        genre: 'Action',
        authors:['Author1', 'Author2']
    }
console.log(author2);
let author3 =
    {
        title: 'Book3',
        pageCount: 500,
        genre: 'Documental',
        authors:['Author1', 'Author2']
    }
console.log(author3);

//     #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача
//

let users=[
    {name:"Vasya", username:'MegaDeveloper', password: 'qwerty'},
    {name:"Sava", username:'Developer', password: 'mypassword'},
    {name:"Oleg", username:'UltraDeveloper', password: 1111},
    {name:"Yuri", username:'MiniDeveloper', password: 1337228},
    {name:"Nazar", username:'Boss', password: "dollors$$"},
    {name:"Nastya", username:'Buhalter', password: 789456123},
    {name:"Ivan", username:'Security', password: 12345678},
    {name:"Dima", username:'Agent007', password: 'JamesBond'},
    {name:"Walter", username:'White', password: 5555555},
    {name:"Kokos", username:'Palma', password: 100500},
]

console.log(users)
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)

// #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2.
// Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

let weather =
    [
        {day:'Monday', temperature: {morning:0, day:12, night:-4} },
        {day:'Tuesday', temperature: {morning:1, day:15, night:-3} },
        {day:'Wednesday', temperature: {morning:-5, day:7, night:-10} },
        {day:'Thursday', temperature: {morning:-3, day:8, night:-14} },
        {day:'Friday', temperature: {morning:5, day:18, night:3} },
        {day:'Saturday', temperature: {morning:3, day:10, night:-2} },
        {day:'Sunday', temperature: {morning:1, day:9, night:-6} },
    ];
console.log(weather)