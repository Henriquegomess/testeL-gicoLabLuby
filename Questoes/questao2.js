function questao2(){
    let resultado = [];
    let conteudo = [];
    var entrada = prompt('Itens array');
    let count = entrada - 1;

    while (isNaN(entrada)) {
        entrada = prompt('Itens array');
    }
    
    for (let i = 0; i < entrada; i++) {

        conteudo[i] = prompt(`Posição${i}`);
        resultado[count]  = conteudo[i];
        count= count - 1;
    }
    alert(resultado);
}