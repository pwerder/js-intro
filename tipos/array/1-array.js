const users = ['Guilherme', 'Pedro', 'Jenifer'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'Guilherme',
        age: 26,
        gender: gender.MAN
    },
    {
        name: 'Pedro',
        age: 43,
        gender: gender.MAN
    },
    {
        name: 'Jenifer',
        age: 18,
        gender: gender.WOMAN
    }
];

// Retornar a quantidade de intens de um array
console.log('Items:', persons.length);

// Verificar se é Array
console.log('A variável persons é um array:', Array.isArray(persons));

// Iterar os itens do array
persons.forEach(person => {
    console.log(`Nome: ${person.name}`);
})

// Filtrar array
const mens = persons.filter(persons => person.gender === gender.MAN);
console.log('\nNova lista apenas com homens:', mens);

// Retornar um novo