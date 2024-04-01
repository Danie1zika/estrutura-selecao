/**Questão 7: Como você pode usar uma declaração if, else if, else para verificar 
se um número é múltiplo de 2, 3 ou 5 em JavaScript?
 */

var numero = 10;

if (numero %2 === 0) {
    console.log("multiplo de 2")
} else if (numero %3 === 0) {
    console.log("multiplo de 3")
} else { (numero %5 === 0);
console.log("multiplo de 5")
}