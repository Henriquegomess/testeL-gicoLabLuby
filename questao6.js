function questao6(){
    let entrada = prompt('Itens array');
    let conteudo = [];
    
    while (isNaN(entrada)) {
        entrada = prompt('Itens array');
    }
    for (let i = 0; i < entrada; i++) {
        conteudo[i] = prompt(`Posição ${i}`);
    }

    conteudo = conteudo.filter(function(elemento, posicao, self) {
        return self.indexOf(elemento) == posicao;
    })
    alert(conteudo);
}
