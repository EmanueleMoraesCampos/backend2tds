const cidade = "Curitiba";
const tempCelsius = 19;

const tempFahrenheit = tempCelsius * (9 / 5) + 32;
const tempKelvin = tempCelsius + 273.15;
const variacaoDiaria = 26.3 - tempCelsius;

console.log(`A temperatura em ${cidade} está ${tempCelsius}C°`);
console.log(`Celsius: ${tempCelsius} C°`);
console.log(`Fahrenheit: ${tempFahrenheit} F°`);
console.log(`Kelvin: ${tempKelvin} K°`);
console.log(`Variação prevista: ${variacaoDiaria}`);