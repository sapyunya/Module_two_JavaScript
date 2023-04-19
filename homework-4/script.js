'use strict'

const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']; 

const weekendDayIndex = [5, 6];
const currentDayIndex = new Date().getDay()-1;
const currentDay = week[currentDayIndex];

console.log(currentDayIndex)

function printDay(index) {
    const textStyle = `text ${currentDayIndex === index ? 'italic' : ''} ${weekendDayIndex.includes(index) ? 'bold' : ''}`
    document.writeln(`<div class='${textStyle}'>${week[index]}</div>`)
}

for (let i = 0; i < week.length; i++) {
    printDay(i);
}









let arr = ['379', '457', '765', '304', '77', '39', '277'];

for (let i = 0; i < arr.length; i++) { 
    if (arr[i].startsWith('3') || arr[i].startsWith('7')) {
        console.log(arr[i]);
    }
}

