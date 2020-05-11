function soma(a) {
    return function(b) {
        return a + b;
    }
}
//guarda funcao soma dentro da soma2 e o 'a' sempre sera 2
const soma2 = soma(2);

soma2(2);
soma2(3);
soma2(4);
soma2(5);