//Importar la funcion sum del archivo app.js
const { sum } = require("./app.js");

//Comienza tu primera prueba
test("adds 14 + 9 to equal 23", () => {

    //Dentro de la prueba llamamos a nuestra funcion sum con 2 numeros
    let total = sum(14,9);

    //prueba, Esperamos que la suma de esos 2 numeros sea 23
    expect(total).toBe(23);
});

// test del ejercicio # 8
// Importar las funciones de app.js
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require("./app.js");

// Prueba de conversión de Euros a Dólares
test("Convert 3.5 Euros to USD", () => {
    expect(parseFloat(fromEuroToDollar(3.5).toFixed(2))).toBe(3.75); // 3.5 * 1.07 = 3.745
});

// Prueba de conversión de Dólares a Yenes
test("Convert 10 Dollars to Yens", () => {
    expect(parseFloat(fromDollarToYen(10).toFixed(2))).toBe(1462.62); // (10/1.07) * 156.5 = 1462.49
});

// Prueba de conversión de Yenes a Libras
test("Convert 1000 Yens to Pounds", () => {
    expect(parseFloat(fromYenToPound(1000).toFixed(2))).toBe(5.56); // (1000/156.5) * 0.87 = 5.558

});
