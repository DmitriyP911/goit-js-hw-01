`use strict`;

const deliveryCountry = prompt( `Введите страну доставки` );
const chinaPrice = 100;
const chiliPrice = 250;
const australiaPrice = 170;
const indiaPrice = 80;
const jamaicaPrice = 120;
if( deliveryCountry === null ) {
    console.log( `В Вашей стране доставка недоступна` );
}
else {
    switch( deliveryCountry.toLowerCase() ) {
        case "китай":
            alert( `Доставка в ${deliveryCountry} будет стоить ${chinaPrice} кредитов` );
            break;
        case "чили":
            alert( `Доставка в ${deliveryCountry} будет стоить ${chiliPrice} кредитов` );
            break;
        case "австралия":
            alert( `Доставка в ${deliveryCountry} будет стоить ${australiaPrice} кредитов` );
            break;
        case "индия":
            alert( `Доставка в ${deliveryCountry} будет стоить ${indiaPrice} кредитов` );
            break;
        case "ямайка":
            alert( `Доставка на ${deliveryCountry} будет стоить ${jamaicaPrice} кредитов` );
            break;
        default:
            alert( `В Вашей стране доставка недоступна` );
    }
}