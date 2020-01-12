`use strict`;

const name = "Генератор звщитного поля";
let price = 1000;
console.log( `Задание №1 \nВыбран ${name}, цена за единицу ${price} кредитов` );
price = 2000;
console.log( `Выбран ${name}, цена за единицу ${price} кредитов` );

const total = 100;
const ordered = 50;
if( ordered > total ) {
    console.log( `Задание №2\nНа складе недостаточно твоаров!` );
}
else {
    console.log( `Задание №2\nЗаказ оформлен, с вами свяжется менеджер` );
}

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
message = prompt( `Введите пароль` );
if( message === ADMIN_PASSWORD ) {
    alert( `Добро пожаловать!` );
    console.log( 'Задание №3\nДобро пожаловать!' )
}
else if( message == null ) {
    alert( `Отменено пользователем` );
    console.log( 'Задание №3\nОтменено пользователем' )
}
else {
    alert( `Доступ запрещен, неверный пароль!` );
    console.log( 'Задание №3\nДоступ запрещен, неверный пароль!' )
}

let credits = 23580;
let pricePerDroid = 3000;
let droidsQuolity = prompt( `Какое количество дроидов Вы бы хотели приобрести?` );
let totalPrice = pricePerDroid * droidsQuolity;
if( droidsQuolity == null ) {
    console.log( `Задание №4\nОтменено пользователем` )
}
else if( totalPrice > credits ) {
    console.log( `Задание №4\nЦена Вашего заказа составит ${totalPrice} \nУ Вас недостаточно кредитов!` );
}
else {
    console.log( `Задание №4\nВы купили ${droidsQuolity} дроидов, на счету осталось ${credits - totalPrice} кредитов.` );
}

let deliveryCountry = prompt( `Введите страну доставки` );
if( deliveryCountry == null ) {
    alert( `Вы не указали страну доставки` );
    console.log( 'Задание №5\nВы не указали страну доставки' )
}
else if( deliveryCountry !== null ) {
    switch( deliveryCountry.toLowerCase() ) {
        case "китай":
            console.log( `Задание №5\nДоставка в Китай будет стоить 100 кредитов` );
            break;
        case "чили":
            console.log( `Задание №5\nДоставка в Чили будет стоить 250 кредитов` );
            break;
        case "австралия":
            console.log( `Задание №5\nДоставка в Австралию будет стоить 170 кредитов` );
            break;
        case "индия":
            console.log( `Задание №5\nДоставка в Индию будет стоить 80 кредитов` );
            break;
        case "ямайка":
            console.log( `Задание №5\nДоставка на Ямайку будет стоить 120 кредитов` );
            break;
        default:
            alert( `В Вашей стране доставка недоступна` );
    }
}

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