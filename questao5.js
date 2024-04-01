/**Questão 5: Como você pode usar uma declaração if, else if, else para verificar 
se um número é par, ímpar ou zero em JavaScript?
 */
var numero = 20;

if (numero === 0) {
    console.log("numero é zero")
} else if (numero % 2 === 0) {
    console.log("numero é par")
} else { 
    console.log("numero é impar")
}