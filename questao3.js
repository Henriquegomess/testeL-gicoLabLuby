function questao3(){

    var entrada = prompt('Itens array');
    let conteudo = [];
    
    while (isNaN(entrada)) {
        entrada = prompt('Itens array');
    }
    for (let i = 0; i < entrada; i++) {

        conteudo[i] = prompt(`Posição ${i}`);

    }

    conteudo.forEach((content,i) => {
        if(content === 'undefined' |!content | content === 'false' ){
        conteudo= conteudo.filter(item => item !== conteudo);
        }
    })
    alert(conteudo);
}
