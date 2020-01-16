`use strict`;

const credits = 23580;
const pricePerDroid = 3000;
const droidsQuolity = prompt( `Какое количество дроидов Вы бы хотели приобрести?` );
const totalPrice = pricePerDroid * droidsQuolity;
if( droidsQuolity === null ) {
    console.log( `Отменено пользователем` );
}
else if( totalPrice > credits ) {
    alert( `Задание №4\nЦена Вашего заказа составит ${totalPrice} \nУ Вас недостаточно кредитов!` );
    console.log( `Задание №4\nЦена Вашего заказа составит ${totalPrice} \nУ Вас недостаточно кредитов!` );
}
else {
    alert( `Задание №4\nВы купили ${droidsQuolity} дроидов, на счету осталось ${credits - totalPrice} кредитов.` );
}