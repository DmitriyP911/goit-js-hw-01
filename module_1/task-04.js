`use strict`;

const credits = 23580;
const pricePerDroid = 3000;
const droidsQuolity = prompt( `Какое количество дроидов Вы бы хотели приобрести?` );

if( droidsQuolity === null ) {
    console.log( `Отменено пользователем` );
}
else {
    const totalPrice = pricePerDroid * droidsQuolity;
    if( totalPrice > credits ) {
        alert( `Цена Вашего заказа составит ${totalPrice}. У Вас недостаточно кредитов!` );
        console.log( `Цена Вашего заказа составит ${totalPrice}. У Вас недостаточно кредитов!` );
    }
    else {
        alert( `Вы купили ${droidsQuolity} дроидов, на счету осталось ${credits - totalPrice} кредитов.` );
    }
}
