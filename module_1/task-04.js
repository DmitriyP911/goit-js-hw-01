`use strict`;

let credits = 23580;
let pricePerDroid = 3000;
let droidsQuolity = prompt( `Какое количество дроидов Вы бы хотели приобрести?` );
let totalPrice = pricePerDroid * droidsQuolity;
if( droidsQuolity == null ) {
    console.log( `Задание №4\nОтменено пользователем` );
    alert( `Вы отменили ввод!` );
}
else if( totalPrice > credits ) {
    alert( `Задание №4\nЦена Вашего заказа составит ${totalPrice} \nУ Вас недостаточно кредитов!` );
    console.log( `Задание №4\nЦена Вашего заказа составит ${totalPrice} \nУ Вас недостаточно кредитов!` );
}
else if( typeof droidsQuolity == Number ) {
    alert( `Задание №4\nВы купили ${droidsQuolity} дроидов, на счету осталось ${credits - totalPrice} кредитов.` );
    console.log( `Задание №4\nВы купили ${droidsQuolity} дроидов, на счету осталось ${credits - totalPrice} кредитов.` );
}
else {
    while( isNaN( droidsQuolity ) ) {
        alert( "Вы ввели не число, повторите попытку" );
        console.log( "Задание №4\nВы ввели не число, повторите попытку" );
        droidsQuolity = prompt( `Какое количество дроидов Вы бы хотели приобрести?` );
    }
    while( droidsQuolity == "" ) {
        alert( "Вы оставили поле для заполнения пустым, повторите попытку" );
        console.log( "Задание №4\nВы оставили поле для заполнения пустым, повторите попытку" );
        droidsQuolity = prompt( `Какое количество дроидов Вы бы хотели приобрести?` );
    }
}
