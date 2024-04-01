/**Questão 8: Como você pode usar uma declaração if, else if, else para 
determinar se uma idade corresponde a bebê, criança, adolescente, adulto ou 
idoso em JavaScript? 
 */

if (idade <= 4) {
  console.log("bebê");
} else if (idade <= 12) {
    console.log("criança");
} else if (idade <= 17) {
    console.log("adolescente");
} else if (idade <= 59) {
    console.log("adulto");
} else {(idade >= 60); 
    console.log("idoso");
}
