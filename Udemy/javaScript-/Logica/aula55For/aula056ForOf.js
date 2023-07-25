const nome = ['Luiz', 'Otavio', 'Henrrique']

/*for (let i = 0; i < nome.length; i++) {  //  tradicional (array ou string) 
    console.log(nome[i]);
}
*/

/*for(let i in nome){  // retorna o indece e o valor  (array, string ou objetos)
    console.log(nome[i]);
}
*/

for(let valor of nome){  // retorna so o valor (iteráveis, arrays ou strings)
    console.log(valor);
}
