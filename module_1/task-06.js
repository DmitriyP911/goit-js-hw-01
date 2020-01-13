`use strict`;

let input;
let totalNum = 0;
while( true ) {
    input = prompt( "Введите число: " );
    if( input === null ) break;
    input = parseInt( input );
    if( isNaN( input ) ) {
        alert( "Было введено не число, попробуйте еще раз" );
        console.log( "Задание №6\nБыло введено не число, попробуйте еще раз" )
        continue;
    }
    totalNum += input;
}
const message6 = alert( `Задание №6\nОбщая сумма чисел равна ${totalNum}` );