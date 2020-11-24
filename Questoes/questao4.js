function questao4(){
    var entrada = prompt('Num array');
    let conteudo = [];
    
    while (isNaN(entrada)) {
        entrada = prompt('Num array');
    }
    for (let i = 0; i < entrada; i++) {
        let array = []
    array[0] = prompt(`Key`);
    array[1] = prompt(`Key`);

    conteudo = [...conteudo, array];
    }

    const entries = new Map(conteudo);
    const objeto = Object.fromEntries(entries);

    alert(objeto);
}