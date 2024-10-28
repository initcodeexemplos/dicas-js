const usuarios = [
    { nome: 'João', idade: 42 },
    { nome: 'Ana', idade: 32 },
]
for (const { nome, idade } of usuarios) {
    console.log(nome, idade)
}
console.log('----------------------')
usuarios.forEach(({ nome, idade }) => {
    console.log(nome, idade)
})