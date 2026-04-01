const idade = 20;
const maiorDeIdade = idade >= 18;
const possuiCNH = true;

//Operador E
const podeDirigir = maiorDeIdade && possuiCNH
console.log("Pode dirigir? "  + podeDirigir);

//Operador OU
const podeViajarSozinho = maiorDeIdade ||possuiCNH
console.log("pode viajar sozinho? " + podeViajarSozinho);

//Operador NOT
const precisaDeAcompanhante = !maiorDeIdade;
console.log("Precisa de acompanhate? " + precisaDeAcompanhante);