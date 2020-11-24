function questao8(){
    let conteudo = [];
    let entrada = prompt('Itens no array');
    let entrada2 = 0;
    

    while (isNaN(entrada)) {
        entrada = prompt('Itens no array');
    }
    for (let i = 0; i < entrada; i++) {
        if(window.confirm(`Posição ${i}`)){
        let array = [];
        entrada2 = prompt('Itens no array');

        while (isNaN(entrada)) {
        entrada2 = prompt('Itens no array');
        }
        for (let i = 0; i < entrada2; i++) {
            array[i] = prompt(`Posição ${i}`);
        }
        conteudo = [...conteudo, array]
        }else{
            conteudo[i] = prompt(`Posição ${i}`);
        }

    }
    console.log('Alinhado' , conteudo);

    conteudo = conteudo.flat();


    console.log('Desalinhado' , conteudo);
    alert('Console', conteudo);
}