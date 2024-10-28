const pessoa = { nome: 'João', idade: 25 };

function apresentar({ nome, idade }) {
    return `Meu nome é ${nome}! Tenho ${
        idade} anos.`;
}

console.log(apresentar(pessoa));