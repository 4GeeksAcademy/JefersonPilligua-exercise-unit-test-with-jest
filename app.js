// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
};

// Solo un registro en consola para nosotros
console.log(sum(7,3));


// One euro is:
const oneEuroIs = {
    "JPY": 156.5, // Japanese yen
    "USD": 1.07, // US dollar
    "GBP": 0.87  // British pound
};

const fromEuroToDollar = (euros) => {
    return euros * oneEuroIs.USD;
};

const fromDollarToYen = (dollars) => {
    const euros = dollars / oneEuroIs.USD;
    return euros * oneEuroIs.JPY;
};

const fromYenToPound = (yen) => {
    const euros = yen / oneEuroIs.JPY;
    return euros * oneEuroIs.GBP;
};


// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };