'use strict'
//месячный бюджет
const money = Number(prompt('Ваш месячный доход?', 10000)); 
const profit = 'Фриланс';
const expense = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?', 'Аренда, Питание, Транспорт, Досуг');
const amount = Number(prompt('Во сколько обойдутся обязательные статьи расходов?', 1000));
const deposit = confirm('Есть ли у вас вклад в банке?');

const extraMoney = Number(prompt(`Перечислите возможный дохода за ваши дополнительные работы ${profit}`));

let accumulatedIncome = []

const getAccumulatedIncome = () => {
    accumulatedIncome = Number((money + extraMoney) - amount)
}

getAccumulatedIncome ()
console.log(accumulatedIncome);

let budgetPerDay = Math.floor(accumulatedIncome / 30);
let purpose = Number(prompt('Сколько нужно накопить?'));
let months = Math.ceil(purpose / accumulatedIncome);


const getTargetMonth = () => {
    return purpose / accumulatedIncome
}
getTargetMonth()

console.log(`Ваш бюджет на месяц с учетом ваших расходов составляет:  ${accumulatedIncome}`);
console.log(`Ваша цель накопить ${purpose} руб. с учетом всех ваших расходов будет достигнута через ${getTargetMonth()} месяца`);
console.log('Дневной бюджет', budgetPerDay);