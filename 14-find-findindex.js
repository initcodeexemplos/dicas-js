const usuarios = [
    { id: 4, nome: 'João' },
    { id: 3, nome: 'Ana' },
    { id: 2, nome: 'Maria' },
    { id: 1, nome: 'Pedro' }
]
const usuario = usuarios.find(u => u.id === 4)
console.log(usuario)
const index = usuarios.findIndex(u => u.id === 4)
console.log(usuarios[index])