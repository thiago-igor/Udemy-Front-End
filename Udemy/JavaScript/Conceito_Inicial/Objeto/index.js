const pessoa1 = { // {Objeto}  [Array]
     nome: 'luiz',
     sobrenome: 'Miranda',
     idade: 25
};

console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)
console.log(pessoa1.idade)

console.log('Ou podemos criar com funçao:')

function criarPessoa(nome, sobrenome, idade) {
    return{nome, sobrenome, idade}
}

const pessoa2 = criarPessoa('Luiz', 'Miranda', 25);
const pessoa3 = criarPessoa('Algusto', 'Barros', 55);
const pessoa4 = criarPessoa('Thiago', 'Miranda', 33);

console.log(pessoa2.nome, pessoa2.sobrenome, pessoa2.idade);
console.log(pessoa2);