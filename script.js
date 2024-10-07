//Bienvenida a Javascript básico, para comentar una linea de código puedes usar las dos barras // y para comentar un bloque de varias líneas puedes usar barra y asterisco para abrir /*  asterisco y barra para cerrar */

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log('Hola soy tu consola y juntas vamos a aprender Javascript')

//Si has encontrado el mensaje puedes continuar con los ejercicios

//Ejercicio 1: Imprime en la consola "Bienvenida/o al bootcamp P2 Juniors (BCN Singulars) de Factoría F5" y mira en tu navegador si sale el resultado.

//Escribe tu código aquí

let nombre = "Bienvenida/o al bootcamp P2 Juniors (BCN Singulars) de Factoría F5";
console.log("Bienvenida/o al bootcamp P2 Juniors (BCN Singulars) de Factoría F5");


//VARIABLES Y TIPOS DE DATOS
//Ejercicio 2: Crea una variable por los siguientes tipos de dato: string, number, boolean, null, undefined, object, array e imprímelos en la consola.

//Escribe tu código aquí
 let miVariableLet = "Hola";
 console.log(miVariableLet);
 let esMayorDeEdad = true;
let tienePermiso = false;

if (esMayorDeEdad > tienePermiso) {
  console.log("Puedes conducir");
} else {
  console.log("No puedes conducir");
}
 let edad = "36";
 let x="36"
 console.log(x);

 let nick = "Miller";
 nick =null;
 console.log(nick);

let undefinedVal = undefined;
console.log(undefinedVal);

//OPERADORES ARITMÉTICOS
//Ejercicio 4: Crea una varible que sume 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let numero1 = 5;
let numero2 = 3;
let resultado = numero1 + numero2;

console.log(resultado);


//Ejercicio 5: Crea una varible que reste 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let numero3 = 5;
let numero4 = 3;
let resultado1 = numero3 - numero4;

console.log(resultado1);


//Ejercicio 6: Crea una varible que multiplique 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let numero5 = 5;
let numero6 = 3;
let resultado2 = numero5 * numero6;

console.log(resultado2);


//Ejercicio 7: Crea una varible que divida 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let numero7 = 5;
let numero8 = 3;
let resultado3 = numero7 / numero8;

console.log(resultado3);


//OPERADORES DE COMPARACIÓN
// Ejercicio 8: Crea dos variables, la primera con valor 1 y la segunda con valor 2, compara ambas variables dentro de otra variable e imprime en la consola para ver el resultado.

//Escribe tu código aquí

let comparar = 1;
let comparar1 = 2;

let resultadoComparacion = comparar === comparar1;

console.log(resultadoComparacion);


// Ejercicio 9: Crea otra variable que compare las dos primeras variables creadas en el ejercicio anterior, para que el resultado impreso en la consola sea true.

//Escribe tu código aquí
let diferente = 1;
let diferente1 = 1;

let resultadoComparacion1 = diferente === diferente1;

console.log(resultadoComparacion1);



//Ejercicio 10: completa el ejercicio
/*
let num1 = 15
let num2 = 20

let comparacion = //Realiza la operación de comparación que consideres para que el resultado en consola sea true
console.log(comparacion)
*/
let num1 = 15;
let num2 = 20;

let comparacion = num2 > num1; 
console.log(comparacion);

//Ejercicio 11: completa el ejercicio
/*
let num3 = 1
let num3AsString = "1"

let result = //Realiza la operación de comparación que consideres entre las dos variables dadas, para que el resultado en consola sea false sin usar el comparador de desigualdad
console.log(result) 
*/
let num3 = 1;
let num3AsString = "1";

let result = num3 === Number(num3AsString) + 1;
console.log(result);

//Ejercicio 12: completa el ejercicio
/*
let result2 = //Realiza la operación de comparación que consideres con las dos variables del ejercicio anterior para que el resultado en consola sea true.
console.log(result2)
*/
let num4 = "1";
let num4AsString = "1";

let result1 = num4 === (num4AsString);
console.log(result1);

//OPERADORES DE CADENAS
//Ejercicio 13: Crea una variable con tu nombre y otra variable con tu apellido y crea otra nueva variable con tu nombre completo concatenando las dos variables anteriores e imprime en consola. Debe haber un espacio entre tu nombre y apellido.

//Escribe tu código aquí

let nomb = "Miller";
let apellido = "Montaña";
let nombCompleto = "Miller Duwan Montaña";
let nombCompleto1 = nomb + " " + apellido + "  " + nombCompleto + ".";
console.log(nombCompleto1);



//OPERADORES DE LÓGICA
//Ejercicio 14: Descomenta todo el bloque desde la variable 'a' hasta el 'console.log(res6)' y completa el ejercicio. (Saldrá un error y no podrás visualizar el resultado hasta que termines este ejercicio)

 let a = 6;
let b = 3;

let res =  a < 10 && b > 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res)

let res2 = a < 10 && b < 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res2)

let res3 = a == 5 ||  b == 5 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res3)

let res4 = a == 6 && b == 0 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res4)

let res5 = a == 0 && b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res5)

let res6 = a == 6 &&  b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res6) 
