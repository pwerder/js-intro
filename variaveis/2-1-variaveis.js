var test = 'example';

(() => {
    var test = 'example';
    console.log(`Valor dentro da função "${test}"`);

    if(true) {
        console.log(`Valor dentro do if. "${test}"`);
    }

    console.log(`Valor apósa a execução do if "${test}"`);
})();
