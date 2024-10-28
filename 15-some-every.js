const usuarios = [
    { nome: 'João', idade: 42 },
    { nome: 'Ana', idade: 32 },
    { nome: 'Maria', idade: 22 },
    { nome: 'Teste', idade: 11 }
]
// Tem algum Pedro dentro do array?
const algum = usuarios.some(
    u => u.nome.startsWith("Pedro")
)
console.log(algum)
// Todos são maiores de idade?
const todos = usuarios.every(
    u => u.idade > 18
)
console.log(todos)
