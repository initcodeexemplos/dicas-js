const numeros = [1, 2, 3, 4, 5];
// faça o dobro dos números
const dobro = numeros.map(num => num * 2)
console.log(dobro)
// pegue só os pares
const pares = numeros.filter(num => num % 2 === 0)
console.log(pares)
// some tudo
const somar = numeros.reduce((total, num) => total + num, 0)
console.log(somar)