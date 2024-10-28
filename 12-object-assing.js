const exemplo1 = { a: 1 };
const exemplo2 = { a:2, b: 2 };
const mesclar = { ...exemplo2 , ...exemplo1}
const mesclar2 = Object.assign(exemplo2, exemplo1)
console.log(mesclar);
console.log(mesclar2);