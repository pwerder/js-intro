function fn() {
    log('Hosting de funcao');

    function log(value) {
        console.log(value);
    }
}

fn();
//boa pratica sempre declarar antes de usar
/**
function fn() {
    function log(value){
        console.log(value);
    }
    log('Hosting de funcao');
}
 */