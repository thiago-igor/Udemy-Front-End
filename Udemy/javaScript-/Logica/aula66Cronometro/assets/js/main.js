function relogio() {
    
    const relogio = document.querySelector('.relogio')
    let segundos = 0;
    let timer
    
    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos*1000)// *1000, pois o js recebe em milesegundo e assim transformamos em segundo
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'// mandando a data 01/01/1970 as 00:00h
        })
    } 
    
    function iniciaRelogio(params) {
        timer = setInterval(function(){
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        },1000)  
    }
    
    document.addEventListener('click', function(e){
        const el = e.target; // e.targt: retorna onde clicamos na tela
        
        if(el.classList.contains('iniciar')){
            relogio.classList.remove('pausado')
            clearInterval(timer)
            iniciaRelogio()
        }
        
        if(el.classList.contains('pausar')){
            clearInterval(timer);
            relogio.classList.add('pausado')
        }
        
        if(el.classList.contains('zerar')){
            relogio.classList.remove('pausado')
            clearInterval(timer);
            relogio.innerHTML = '00:00:00'
            segundos = 0;
        }
    })
    
    // para nao criarmos varios EventList podemos fazer como acima:
    /*
    const iniciar = document.querySelector('.iniciar')
    const pausar = document.querySelector('.pausar')
    const zerar = document.querySelector('.zerar')
    
    iniciar.addEventListener('click', function event(){
        relogio.classList.remove('pausado')
        clearInterval(timer)
        iniciaRelogio()  
    })
    
    pausar.addEventListener('click', function event(){
        clearInterval(timer);
        relogio.classList.add('pausado')
    })
    
    zerar.addEventListener('click', function event(){
        clearInterval(timer);
        relogio.innerHTML  = '00:00:00'; 
        segundos = 0;
    })
    
    */
}

relogio();
