function questao10(){
    let resultado = [];
    let array1 = [];
    let array2 = [];

    let entrada = prompt('primeiro array');

    while (isNaN(entrada)) {
        entrada = prompt('primeiro array');
    }
    for (let i = 0; i < entrada; i =+ i) {
        array1[i] = prompt(`Posiçã: ${i}`);
    }

    entrada = prompt('segundo array');

    while (isNaN(entrada)) {
        entrada = prompt('segundo array');
    }
    for (let i = 0; i < entrada; i =+ i) {
        array2[i] = prompt(`Posição: ${i}`);
    }

    for (let i = 0; i < array1.length; i =+ i) {
        array2.forEach(item => {
        if(item === array1[i]){
        result.push(item);
        }
    });

    }
    console.log('array1:', array1);
    console.log('array2:', array2);
    console.log('result:', result);
    alert(resultado);
}