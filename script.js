// ES 6 PRACTISE BEFORE LEARNING REACT.JS BASICS
// ES 6 PRACTISE BEFORE LEARNING REACT.JS BASICS
// ES 6 PRACTISE BEFORE LEARNING REACT.JS BASICS

// https://coursehunter.net/course/react-redux-professionalnaya-razrabotka
//     https://coursehunter.net/course/react-redux-professionalnaya-razrabotka
//         https://coursehunter.net/course/react-redux-professionalnaya-razrabotka
//             https://coursehunter.net/course/react-redux-professionalnaya-razrabotka
//                 https://coursehunter.net/course/react-redux-professionalnaya-razrabotka
//                     https://coursehunter.net/course/react-redux-professionalnaya-razrabotka
//                         https://coursehunter.net/course/react-redux-professionalnaya-razrabotka
//                             https://coursehunter.net/course/react-redux-professionalnaya-razrabotka
//                                 https://coursehunter.net/course/react-redux-professionalnaya-razrabotka
//                                     https://coursehunter.net/course/react-redux-professionalnaya-razrabotka
//                                         https://coursehunter.net/course/react-redux-professionalnaya-razrabotka


// Возведение в квадрат с помощью стрел. функции

// const square = (x) => x * x;
// console.log(square(2.51111));


// __________________________________________________________________________________________
// __________________________________________________________________________________________

// Взять максимальное нечётное число из массива стрингов

// const arr = ['1', '2', '3', '4', '5'];
//
// const res = arr
//     .map((el) => parseInt(el)) // кастую все елементы в инт
//     .filter((num) => num % 2)  // ищу все не чётные числа
//     .reduce((max, value) => Math.max(max, value), 0); //беру максимальное число из того, что осталось
//
// console.log(res);

// __________________________________________________________________________________________
// __________________________________________________________________________________________

// Чистая функция которая суммирует, а потом отнимает что-то через параметры фукции
// const sum = (sum, del) => (sum + sum) - del;
// console.log(sum(100, 20));

// __________________________________________________________________________________________
// __________________________________________________________________________________________

// Значения по умолчанию в функции
// function ordersAmount(start = 20, count = 0) {
//     console.log('Getting ', start, 'orders from ', count)
// }
//
// ordersAmount(9);


// function dataFromObject(opts = {minPrice: 99, maxPrice: 200}) {
//     console.log(opts)
// }
//
// dataFromObject();

// __________________________________________________________________________________________
// __________________________________________________________________________________________

// Rest параметр
// function max(a, b, c, ...numbers) {
//     console.log(a, b, c, numbers)
// }
//
// max(1, 2, 3, 4, 5, 6);

// __________________________________________________________________________________________
// __________________________________________________________________________________________

// Spread параметр для массивов


// Беру самый большой елемент из массива (___ES5___)

// const arr = ['1', '2', '3', '4', '5'];
// const res = Math.max.apply(Math, arr);
// console.log(res);

// Беру самый большой елемент из массиВОВ (___ES6___)

// function maxNumArray1() {
//     const arr1 = [1, 2, 3, 4, 5];
//     const arr2 = [15, 26, 37, 412, 54];
//     const res = Math.max(...arr1, ...arr2);
//     console.log(res)
// }
//
// maxNumArray1();

// Беру самый большой елемент из массива (___ES6___)

// function maxNumArrays2() {
//     const arr = [1, 2, 3, 4, 5];
//     const res = Math.max(...arr);
//     console.log(res);
// }
//
// maxNumArrays2();

// Создание нового массива, но с теми же елементами, что и в прошлой копии (поверхностная копия shallowCopy())

// const arr1 = [23, 44, 50, 100, 300];
// const arr2 = [919, 454, 80, 1470, 380];
// const shallowCopy = [...arr1, ...arr2, 20202020  ];
// console.log(shallowCopy);

// __________________________________________________________________________________________
// __________________________________________________________________________________________

// Destructing - Деструктуризация

// const person = {
//     name: {
//         first: 'Kostyantyn',
//         last: 'Yelskyi',
//     },
//     age: '20',
//     country: 'Ukraine',
//     job: 'Frontend Developer'
// };
//
// /*const firstName = person.firstName;*/   // ES 5
// /*const lastName = person.lastName;  */   // ES 5
// /*const job = person.job;            */   // ES 5
//
//
// const {name: {first: firstName, last: lastName}} = person;  // достаю из person -> name и делаю переменные firstName, lastName // ES 6
// console.log(firstName, lastName);         // ES 6


// const person = {
//     name: {
//         first: 'Kostyantyn',
//         last: 'Yelskyi',
//     },
//     age: '20',
//     role : 'admin',
//     country: 'Ukraine',
//     job: 'Frontend Developer'
// };
//
// const {permissions: {role = 'user '} = {} } = person; // значение по умолчанию role -> user.
// console.log(role);


// function connect({host = 'localhost', port = '12345', user = 'guest'} = {}) {
//     console.log('user: ', user, '| port: ', port, '| host: ', host)
// }
//
// connect(
//     {
//         // host: 'localhost',
//         // port: '1111',
//         // user: 'user_test'
//     }
// );


const dict = {
    duck: 'quack',
    dog: 'wuff',
    mouse: 'squeak'
};

const {duck, ...otherAnimals} = dict;
console.log(duck);
console.log(otherAnimals);


// __________________________________________________________________________________________
// __________________________________________________________________________________________

// Array destructing - Деструктуризация массивов

//  УРОК 14
