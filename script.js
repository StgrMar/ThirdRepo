'use strict';

let num;
let notify;

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};


const try10 = function (i) {

    const asking = function (a) {



        const msg = function (b) {
            b = +prompt('Угадай число от 1 до 100');

            i--;

            console.log('Загаданное число ' + a);
            console.log('Занесенное число ' + b);

            if (b === 0 || i === 0) {
                notify = confirm('Игра окончена, хотите сыграть еще?');
                if (notify == true) {
                    try10(10);
                }

            } else if (!isFinite(b)) {
                notify = alert('Введите число!');
                msg();

            } else if (a !== b && b > a) {
                notify = alert('Загаданное число меньше, осталось попыток: ' + i);
                msg();

            } else if (a !== b && b < a) {
                notify = alert('Загаданное число больше, осталось попыток: ' + i);
                msg();
            } else {
                notify = alert('Поздравляю! Вы угадали!!!');
                notify = confirm('Игра окончена, хотите сыграть еще?');
                if (notify == true) {
                    try10(10);
                }
            }

        };

        if (i >= 0) {
            msg();
        };
    };
    asking(random(1, 100));
};

try10(10);


