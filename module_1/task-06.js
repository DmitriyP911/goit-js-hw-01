`use strict`;

let total = 0;
let input;
do {
    input = prompt( `Введите число` );
    if( Number.isNaN( Number( input ) ) ) {
        alert( `Вы ввели не число` );
        continue;
    }
    total += +input;
} while( input !== null );
alert( `Общая сумма чисел равна ${total}` );
