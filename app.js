//inicia el ejercicio # 8

 // Esta es mi función que suma dos números
const sum = (a, b) => {
    return a + b;
};

// Solo un registro en consola para pruebas
console.log(sum(7,3));

// Definimos un objeto con las tasas de conversión desde 1 Euro a otras monedas
let oneEuroIs = {
    "JPY": 156.5,  // 1 Euro = 156.5 Yenes Japoneses
    "USD": 1.07,   // 1 Euro = 1.07 Dólares Estadounidenses
    "GBP": 0.87    // 1 Euro = 0.87 Libras Esterlinas
};

// Función para convertir de dólares a yenes
function fromDollarToYen(dollars) {
    let euros = dollars / oneEuroIs.USD; // Convertimos dólares a euros
    let yenes = euros * oneEuroIs.JPY; // Convertimos euros a yenes
    return yenes; // Retornamos el valor en yenes
}

// Función para convertir de euros a dólares
function fromEuroToDollar(euros) {
    return euros * oneEuroIs.USD; // Multiplicamos los euros por la tasa de conversión a USD
}

// Función para convertir de yenes a libras esterlinas
function fromYenToPound(yenes) {
    let euros = yenes / oneEuroIs.JPY; // Convertimos yenes a euros
    let pounds = euros * oneEuroIs.GBP; // Convertimos euros a libras esterlinas
    return pounds; // Retornamos el valor en libras
}
console.log(parseFloat(fromEuroToDollar(3.5).toFixed(2)))
console.log(parseFloat(fromDollarToYen(10).toFixed(2)))
console.log(parseFloat(fromYenToPound(1000).toFixed(2)))
// Exportamos las funciones para usarlas en otros archivos
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };


 
