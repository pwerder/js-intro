const name = 'Guilherme';

// Não podemos alterar o valor
name = 'Guilherme';

const user = {
    name: 'Guilherme'
}

//Mas se for um objeto, podemos trocar suas propriedades
user.name = 'Outro nome';

//Não podemos fazer um objeto "apontar" para outro lugar
user = {
    name:  'Guilherme'
};

const persons =  ['Guilherme', 'Pedro', 'Jenifer'];

//Podemos adicionar novos intens
persons.push('João');

//Podemos remover algum item
persons.shift();

//Podemos alterar diretamente
persons[1] = 'James';

console.log('\nArray após as alterações: ', persons);