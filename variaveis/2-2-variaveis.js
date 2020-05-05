(() =>{
    let test = 'valor função';
    
    if(true) {
        let  test = 'valor if';
        console.log(`Valor dentro do if "${test}"`);
    }

    if(true) {
        let  test = 'valor de outro if';
        console.log(`Valor de outro if "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}"`);
})();