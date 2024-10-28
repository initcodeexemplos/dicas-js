console.log(eval("2 + 2"));

const exemplo = "2 + 2";
const func = new Function(`return ${exemplo}`)
const resultado = func()
console.log(resultado)