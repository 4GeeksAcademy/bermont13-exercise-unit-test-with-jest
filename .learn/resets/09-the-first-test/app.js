//Esta es mi funcion que suma dos números
const sum = (a,b) => {
    return a + b
}

//Solo un registro en consola para nosotros
console.log(sum(7,3))

//Exporta la funcion para usarla en otros archivos
//(similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum };

//inicia el ejercicio # 8
   // Definimos un objeto con las tasas de conversión desde 1 Euro a otras monedas
   let oneEuroIs = {
    "JPY": 156.5, // 1 Euro = 156.5 Yenes Japoneses
    "USD": 1.07,  // 1 Euro = 1.07 Dólares Estadounidenses
    "GBP": 0.87   // 1 Euro = 0.87 Libras Esterlinas
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

// Pruebas de las funciones
console.log(fromDollarToYen(100)); // Convierte 100 dólares a yenes
console.log(fromEuroToDollar(50)); // Convierte 50 euros a dólares
console.log(fromYenToPound(10000)); // Convierte 10,000 yenes a libras
 
