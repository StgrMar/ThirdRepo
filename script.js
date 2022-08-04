'use strict';

let game;
let notify;

const checkAns = function (num) {
    return !isNaN(isFinite(num) && parseFloat(num));
};

const asking = function (a) {

    const msg = function (b) {
        b = +prompt('Угадай число от 1 до 100');

        console.log('Загаданное число ' + a);
        console.log('Занесенное число ' + b);

        if (b === 0) {
            notify = alert('Игра окончена');
            console.log(b);

        } else if (!isFinite(b)) {
            notify = alert('Введите число!');
            console.log(b);
            msg();

        } else if (a !== b && b > a) {
            notify = alert('Загаданное число меньше');
            console.log(b);
            msg();

        } else if (a !== b && b < a) {
            notify = alert('Загаданное число больше');
            console.log(b);
            msg();
        } else {
            notify = alert('Поздравляю! Вы угадали!!!');
        }

    };
    msg();
};
asking(5);

