`use strict`;

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
message = prompt( `Введите пароль` );
if( message === ADMIN_PASSWORD ) {
    alert( `Добро пожаловать!` );
    console.log( 'Добро пожаловать!' )
}
else if( message == null ) {
    alert( `Отменено пользователем` );
    console.log( 'Отменено пользователем' )
}
else {
    alert( `Доступ запрещен, неверный пароль!` );
    console.log( 'Доступ запрещен, неверный пароль!' )
}