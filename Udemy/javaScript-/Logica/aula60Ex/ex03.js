//Escrever uma função que volte:
// - Se é divisivel por 3
// - Se é divisivel por 5
// - Se é divisivel por 3 e por 5 
// - caso nao seja divisivel retorna o propio numero
// testar em um loop 

function divisivel(num) {
    if(typeof num !== 'number') return NaN

    if(num % 3 == 0 && num % 5 == 0){
        return console.log(`O numero ${num} é divisível por 3 e por 5`)
    }
    if(num % 3 == 0){
        return console.log(`O numero ${num} é divisível por 3`)
    }
    if(num % 5 == 0){
        return console.log(`O numero ${num} é divisível por 5`)
    }
    return num
}

for(let i = 0 ; i<16; i++){
    console.log(divisivel(i))
}