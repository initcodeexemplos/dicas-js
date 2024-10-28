const usuario = { nome: 'João', idade: 10 }
// como pegar as chaves dos valores?
for(const chave in usuario) {
    console.log(chave)
}

const valores = [10, 20, 30];
// como pegar os indices desses valores?
for(const chave in valores) {
    //console.log(chave)
}

// como pegar os valores?
for(const chave of valores) {
    console.log(chave)
}