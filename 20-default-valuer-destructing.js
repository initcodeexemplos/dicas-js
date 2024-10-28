const usuarios = [
    { nome: 'João', idade: 20 },
    { nome: 'Ana', idade: 10 },
    { nome: 'Maria' },
    { nome: 'Pedro', idade: 12 }
]
for (const usuario of usuarios) {
    const { nome, idade = 0 } = usuario
    console.log(nome, idade)
}