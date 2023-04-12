'use strict'
//месячный бюджет
const money = prompt('Ваш месячный доход?', 10000); 
const profit = 'Фриланс';
const expense = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?', 'Аренда, Питание, Транспорт, Досуг');
const amount = prompt('Во сколько обойдутся обязательные статьи расходов?', 1000);
const deposit = confirm('Есть ли у вас вклад в банке?');
let budgetMonth = money - amount;
console.log(budgetMonth);
const purpose = 100000;
console.log(Math.ceil(purpose / budgetMonth));
const budgetDay = budgetMonth / 30;
console.log(Math.floor(budgetDay));


if ( budgetDay > 6000 ) {
    console.log('У вас высокий уровень дохода');
} else if ( budgetDay < 6000 && budgetDay > 3000 ) {
    console.log('У вас средний уровень дохода');
} else if ( budgetDay < 3000 && budgetDay > 0 ) {
    console.log('К сожалению, ваш уровень дохода ниже среднего');
} else if ( 0 > budgetDay ) {
    console.log('Что-то пошло не так');
}







// const period = 6;

// console.log(typeof money, typeof profit);
// console.log(expense.length);
// console.log(`Период равен ${period} месяцев`);
// console.log(`Цель зарабоать ${purpose} рублей`);

// const budgetDay = money / 30;
// console.log(budgetDay);