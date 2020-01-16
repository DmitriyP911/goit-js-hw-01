`use strict`;

let input;
let totalNum = 0;
do {
    input = prompt( "Введите число:" );
    input = Number( input );
    totalNum += Number( input );
} while( input );
if( input !== Number( input ) ) {
    console.log( "Вы ввели не число" );
}
else {
    console.log( `Общая сумма чисел равна: ${totalNum}` );
}