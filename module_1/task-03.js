`use strict`;

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