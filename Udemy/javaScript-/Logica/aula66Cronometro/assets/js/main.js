function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos)
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'UTC' // pegando a data 01/01/1970 as 0h e 0seg
    })
}

console.log(criaHoraDosSegundos(10*1000))// pois o js ler como milesico de segundo em vez de 10 seg


const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar')
let segundos = 0

function iniciaRelogio() {
    const timer = setInterval(function (params) {
        segundos++;
        relogio.innerHTML = segundos;
    }, 1000);

    iniciar.addEventListener('click', function(event){
        iniciaRelogio();
    })
        
    }