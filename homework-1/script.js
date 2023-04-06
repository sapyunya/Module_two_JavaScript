'use strict'
//месячный бюджет
const money = 50000; 

const profit = 'Фриланс';
const expense = 'Аренда, Питание, Транспорт, Досуг';

const purpose = 100000;
const period = 6;

console.log(typeof money, typeof profit);
console.log(expense.length);
console.log(`Период равен ${period} месяцев`);
console.log(`Цель зарабоать ${purpose} рублей`);

const budgetDay = money / 30;
console.log(budgetDay);


