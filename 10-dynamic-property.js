const prop = 'idade'
const prop2 = 'teste'
const usuario = (property) => {
   return {
        nome: 'Jane',
        [property]: 25
    }
};
console.log(usuario(prop));
console.log(usuario(prop2));