function questao5(){
    let contents = []
    let filter = []
    var entrada = prompt('Digite o numero de itens que deseja no array')

    while (isNaN(entrada)) {
        entrada = prompt('Digite o numero de itens que deseja no array(precisa ser um numero)')
    }
    for (let index = 0; index < entrada; index++) {
        contents[index] = prompt(`digite o valor da posição ${index}`)
    }


    entrada = prompt('Digite quantos itens deseja filtrar')
    while (isNaN(entrada)) {
        entrada = prompt('Digite o numero de itens que deseja no array(precisa ser um numero)')
    }

    for (let index = 0; index < entrada; index++) {
        filter[index] = prompt(`digite o valor o ${index} que deseja filtrar`)
    }

    for (let index = 0; index < entrada; index++) {
        filter.forEach(filter => {
            if(filter === contents[index]){
            contents.splice(index, 1)
            }
        })
    }
    alert(contents)
}