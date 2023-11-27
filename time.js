const prompt = require('prompt-sync')();

let alarmHour = parseInt(prompt('Введіть годину: '));
let alarmMin = parseInt(prompt('Введіть хвилини: '));
let alarmDays = parseInt(prompt('Введіть дні: '));

function validateInput(hours, minutes, days) {
    if (
        Number.isNaN(hours) || Number.isNaN(minutes) || Number.isNaN(days) ||
        hours < 0 || hours > 23 ||
        minutes < 0 || minutes > 59 ||
        days < 0
    ) {
        console.log("Некоректно введені дані.");
        return false;
    }
    return true;
}

function setAlarm(hours, minutes, days) {
    const currentDate = new Date();

    currentDate.setHours(currentDate.getHours() + hours);
    currentDate.setMinutes(currentDate.getMinutes() + minutes);
    currentDate.setDate(currentDate.getDate() + days);

    setTimeout(() => {
        console.log("Будильник спрацював!");
    }, 1000); 
}

if (validateInput(alarmHour, alarmMin, alarmDays)) {
    setAlarm(alarmHour, alarmMin, alarmDays);
} else {
    console.log("Невірні значення введено. Будильник не встановлено.");
}