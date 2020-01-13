`use strict`;

let deliveryCountry = prompt( `Введите страну доставки` );
while( deliveryCountry == "" ) {
    alert( `Вы не указали страну доставки` );
    deliveryCountry = prompt( `Введите страну доставки` );
}
if( typeof ( deliveryCountry ) == String ) {
    deliveryCountry = prompt( `Введите страну доставки` );
}
else if( deliveryCountry == null ) {
    alert( `Вы отменили ввод` );
    console.log( 'Задание №5\nВы отменили ввод' );
}
else if( deliveryCountry !== null, deliveryCountry !== "" ) {
    switch( deliveryCountry.toLowerCase() ) {
        case "китай":
            console.log( `Задание №5\nДоставка в Китай будет стоить 100 кредитов` );
            alert( `Задание №5\nДоставка в Китай будет стоить 100 кредитов` );
            break;
        case "чили":
            console.log( `Задание №5\nДоставка в Чили будет стоить 250 кредитов` );
            alert( `Задание №5\nДоставка в Чили будет стоить 250 кредитов` );
            break;
        case "австралия":
            console.log( `Задание №5\nДоставка в Австралию будет стоить 170 кредитов` );
            alert( `Задание №5\nДоставка в Австралию будет стоить 170 кредитов` );
            break;
        case "индия":
            console.log( `Задание №5\nДоставка в Индию будет стоить 80 кредитов` );
            alert( `Задание №5\nДоставка в Индию будет стоить 80 кредитов` );
            break;
        case "ямайка":
            console.log( `Задание №5\nДоставка на Ямайку будет стоить 120 кредитов` );
            alert( `Задание №5\nДоставка на Ямайку будет стоить 120 кредитов` );
            break;
        default:
            alert( `В Вашей стране доставка недоступна` );
    }
}
