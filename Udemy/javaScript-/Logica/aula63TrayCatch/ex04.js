function retornaHora(data) {
    if(data && !(data instanceof Date)){// se data for enviada e não for uma instacia de Date: lança o erro
        throw new TypeError('Esperando instância de Datedata');
    }
    if(!data){ // se data nao for enviada 
        data = new Date();
    }

    return data.toLocaleTimeStrig('pt-BR',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

const hora = retornaHora = retornaHora();
console.log(hora);