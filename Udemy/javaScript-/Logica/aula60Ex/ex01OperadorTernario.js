function max1(x,y) { //função normal
    return x > y ? x : y; // Se x > y retorna 'x' , se nao : retorna y (Operador ternario)
}

const max2 = (x,y) => x > y ? x : y; // arrow function

console.log(max1(5,7));
console.log(max2(10,20));