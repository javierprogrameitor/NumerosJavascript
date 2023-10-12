console.log("----------Objeto Number----------");

let numeroPrimitivo = 3;
let numero = new Number (3);

console.log(typeof numeroPrimitivo);
console.log(typeof numero);
console.log(Number.isInteger(numeroPrimitivo)); //true
console.log(Number.isInteger(numero)); //false
console.log(numero.valueOf());
console.log(Number.isInteger(numero.valueOf())); //true
console.log(Number.isNaN(numeroPrimitivo)); //false
console.log(Number.isNaN(numero)); //false
console.log(numero.toFixed(3)); //Decimales 
console.log(numero.toString());
console.log(Number.parseInt(numero));
console.log(Number.parseFloat(numero));