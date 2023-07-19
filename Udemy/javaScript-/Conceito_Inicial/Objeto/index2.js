const pessoa1 = { // {Objeto}  [Array]
    nome: 'luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
       console.log(`${this.nome} ${this.sobrenome} esta falando oi...`);
    }
};

pessoa1.fala();