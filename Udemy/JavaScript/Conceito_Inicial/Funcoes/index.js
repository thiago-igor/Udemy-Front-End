function soma (x,y){
    const resultado = x + y;
    return resultado
}


console.log(soma(2,5))
console.log(soma(10,5))

console.log('-------')

const raiz1 = function(n){ // função dentro da constante 
    return n **0.5;
}

console.log(raiz1(9))

console.log('-------')

const raiz2 = n => n **0.5;  //Uma const que recebe uma função em que retorns n^0.5 = raiz (obs: e a mesma coisa da de cima)

console.log(raiz2(9))