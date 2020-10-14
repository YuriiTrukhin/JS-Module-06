// TASKS
// I)
// 1) Написати ф-ю яка приймає рік
// 2) Повертає століття.
// II)
// 1) Запитуємо в користувача роки до тих пір поки він не натисне Cancel
// 2) Всі роки які вводить користувач записується в масив years
//  3) Коли зупинився цикл потрібно перебрати масив years
// і вивести в консоль запис 
// 1952 рік - 20 століття
// 1440 рік - 15 століття
// III)
// 1) Написати ф-ю showYear що приймає рік і перевіряє чи він є високосний
// 2) Функція повертає true якщо рік високосний і false якщо ні
//================================================================== I-II
// const fn = function(x){
// return Math.floor(x/100+1);
// }
 

// const centuryM = function(){ 
//   let years = [];
//   let i;   
//   do {
//     i = prompt("Введите год");
//     i===null?"":years.push(i);
//   }
//   while (i!==null);
//   years.forEach(year=>console.log(`${year}рік - ${fn(year)}`));     
// }
// console.log(centuryM());

//======================= III

// let year = 2004
// const showYear = function (a){
//   a = a%4===0
//   return a 
  
// }
// console.log(showYear(year));
// ==========================IV
// const inventors = [{
//   first: 'Albert',
//   last: 'Einstein',
//   year: 1879,
//   passed: 1955
// },
// {
//   first: 'Isaac',
//   last: 'Newton',
//   year: 1643,
//   passed: 1727
// },
// {
//   first: 'Galileo',
//   last: 'Galilei',
//   year: 1564,
//   passed: 1642
// },
// {
//   first: 'Marie',
//   last: 'Curie',
//   year: 1867,
//   passed: 1934
// },
// {
//   first: 'Johannes',
//   last: 'Kepler',
//   year: 1571,
//   passed: 1630
// },
// {
//   first: 'Nicolaus',
//   last: 'Copernicus',
//   year: 1473,
//   passed: 1543
// },
// {
//   first: 'Max',
//   last: 'Planck',
//   year: 1858,
//   passed: 1947
// },
// {
//   first: 'Katherine',
//   last: 'Blodgett',
//   year: 1898,
//   passed: 1979
// },
// {
//   first: 'Ada',
//   last: 'Lovelace',
//   year: 1815,
//   passed: 1852
// },
// {
//   first: 'Sarah E.',
//   last: 'Goode',
//   year: 1855,
//   passed: 1905
// },
// {
//   first: 'Lise',
//   last: 'Meitner',
//   year: 1878,
//   passed: 1968
// },
// {
//   first: 'Hanna',
//   last: 'Hammarström',
//   year: 1829,
//   passed: 1909
// }
// ];
// const names = inventors.map(el => el.first);
// console.log(names);
// const birthday = inventors.filter(el => Math.floor(el.year/100+1)===19);
// console.log(birthday);
// const olderFifty = inventors.filter(el => el.passed-el.year >= 50 );
// console.log(olderFifty);
// const radiation = inventors.map(el => el.last==="Curie"?el={...el,married:"husband"}:el);
// console.log(radiation);
// const letter = inventors.map((el,i,arr) => {
//   el.last.includes("e")?el.last:"";
//   return el.last
// });
// console.log(letter);
// const sort = inventors.sort((a,b)=>{
//   if (a.first<b.first){
//     return -1
//   }else if (a.first>b.first){
//     return 1
//   } else {
//     return 0
//   } 
  
// })
// console.log(sort);

// console.log(alphabetSort);
// const summ = inventors.reduce((acc,el)=>{
//  return acc += el.passed-el.year
// },0)
// console.log(summ);



// // - Вывести массив имён учёных/изобретателей
// // - Вывести массив тех кто родился в 19-ом веке
// // - Вывести массив тех, кто прожил больше 50-ти лет
// // - Найти того, кто работал с радиацией и добавить ей свойство "замужем", в значение запистаь имя мужа
// // - Вывести фамилии тех, в чьём имени есть буква "е"
// // - Получить массив объектов отсортированный по имени (по алфавиту).
// // - Найти сумму лет жизни всех учёных

// const showYear =  year  => !(year % 4)
// console.log(showYear(2003));
//============================================================== задача
// let worker = {
//     workSchedule: [
//         {day: 'M', hours: 9},
//         {day: 'T', hours: 10},
//         {day: 'W', hours: 11},
//         {day: 'T', hours: 5},
//         {day: 'F', hours: 12},
//         ],
//         penalty: [
//         {day: 'M', value: 0},
//         {day: 'T', value: 120},
//         {day: 'W', value: 50},
//         {day: 'T', value: 0},
//         {day: 'F', value: 35},
//         ],
//         premium: 500,
// }
// const getSalary = (worker,rate) => {
// const {workSchedule, penalty, premium} = worker;
// let salary = workSchedule.reduce((acc,el)=>{
//     acc += el.hours*rate
//     return acc    
// },0)

// let arr = penalty.reduce((accum,el)=> {
//   return  accum += el.value    
// },0)

// return salary-arr+premium

// }


// // написати ф-ю getSalary(worker, rate) яка приймає аргументами обєкт робітника і погодинну ставку.
// // Ф-я вертає зарплату робітника за тиждень з урахуванням штрафів і премій
// // hours - години роботи
// // value - сума штрафу
// // premium - премія
// console.log(getSalary(worker, 20)); // 1235
// console.log(getSalary(worker, 8)); // 671
//==================================== задачи




let a = prompt("Введите что-то одно: камень,бумага или ножницы ")
    
do {
    const arr = ["камень","бумага","ножницы"]
    let b = arr[Math.floor(Math.random() * 3)];
    let a = prompt("Введите что-то одно: камень,бумага или ножницы ")
    if ( a ===null){
        alert( `Не жми отмену!!!`)
    } else
    if (a!=="камень"&&a!=="бумага"&&a!=="ножницы"){
        alert( `Играй по правилам!!!`)
} else if (b===a) {
    alert(`Компьютер ввел ${b} = Ничья`);
} else if (a==="камень"&& b==="бумага"){
    alert(`Компьютер ввел ${b} = Выиграл компьютер`);
} else if (b==="камень"&& a==="бумага"){
    alert(`Компьютер ввел ${b} = Вы выиграли!`);
} else if (a === "ножницы"&& b === "камень"){
    alert(`Компьютер ввел ${b} = Выиграл компьютер`);
} else if (b === "ножницы"&& a === "камень"){
    alert(`Компьютер ввел ${b} = Вы выиграли!`)
} else if (a === "ножницы"&& b === "бумага"){
    alert(`Компьютер ввел ${b} = Вы выиграли!`)
} else if (b === "ножницы"&& a === "бумага"){
    alert(`Компьютер ввел ${b} = Выиграл компьютер`)
} 
}while(a)



