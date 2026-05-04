//Lista ordenada de valores - ARRAY
const frutas = ["Maçã","Banana", "Uva", "Manga"];
//Ìndice =         0       1        2       3   

console.log(frutas[0]);
console.log(frutas[3]);
console.log(frutas.length); 
//Faz a contagem dos elementos dentro do array

frutas[1] = "Morango";
console.log(frutas);

frutas.push("Pẽssego");
frutas.unshift("Abacate");
console.log(frutas);

frutas[4] = ("Laranja");
frutas.unshift("Abacaxi");
frutas.push("Abacate");
console.log(frutas);