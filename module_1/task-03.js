`use strict`;

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
let password = prompt( `Введите пароль` );
if( password === ADMIN_PASSWORD ) {
    message = `Добро пожаловать!`;
    alert( message );
}
else if( password == null ) {
    message = `Отменено пользователем`;
    alert( message );
}
else {
    message = `Доступ запрещен, неверный пароль!`;
    alert( message );
}