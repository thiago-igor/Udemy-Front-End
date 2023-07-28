function soma(x,y) {
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('X e Y Precisam ser numereos!'); // lançar erro 
    }
    return x + y;
}

try{ 
    console.log(soma(5,5));
    console.loge(soma('2',1));
}catch(error){ 
    //console.log(error); // Aqui ele manda o erro completo de o que aconteceu
    console.log('Ocorreu um erro, verifique e tente novamente!') // msg personalizada
}