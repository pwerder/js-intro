/**
    Adicionar um ou mais elementos no início do array e retorna o
    tamanho do novo array
*/

const arr = ['banana', 'melancia', 'ababcate'];
const arrLength = arr.unshift('acerola');

console.log(arrLength);
// 4

console.log(arr);
// ['acerola', 'banana', 'melancia', 'abacate'];