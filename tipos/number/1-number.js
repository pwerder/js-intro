const myNumber = 12.4032;

//Trasformar número para string
const numberAsString = myNumber.toString();
console.log('Número transformado em string: ', typeof numberAsString);

//Retorna o número com um número de casas decimais
const fixedTwoDecimais = myNumber.toFixed(2);
console.log('\nNúmero com duas casas decimais:', fixedTwoDecimais);

//Transforma uma string em float
console.log('\nString transformado para float:', typeof parseFloat('13.22'));

//Transforma uma string em in
console.log('\nString transformado para int:', typeof parseInt('13,20'));