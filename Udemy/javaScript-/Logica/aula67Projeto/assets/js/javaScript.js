const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

function criaLi() {
    const li = document.createElement('li')
    return li;
}

inputTarefa.addEventListener('keypress', function (e){ // ativar o 'Enter'
    //console.log(e) // com essa opção clicamos em uma tecla e no console ele me da o codigo da tecla.
    if(e.keyCode === 13){
        if(!inputTarefa.value) return; // se for diferente de vazio, retorn
        criaTarefa(inputTarefa.value)
    }
});

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus(); // JS 'clicar' no cursor
}

function criaBotaoApagar(li) {
    li.innerText += ' '
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar';
    //botaoApagar.classList.add('apagar') // criando classe para o botao
    botaoApagar.setAttribute('class', 'apagar'); // criando class 'apagar'
    botaoApagar.setAttribute('title', 'Apagar está tarefa'); // titulo para o botao
    li.appendChild(botaoApagar);
}

    

function criaTarefa(textoInput) {
    console.log(textoInput)
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

btnTarefa.addEventListener('click', function() {
    if(!inputTarefa.value) return; // se for diferente de vazio, retorn
    criaTarefa(inputTarefa.value) 
})

document.addEventListener('click', function(e){
    const el = e.target; // ver onde clicamos com o mouse

    if(el.classList.contains('apagar')){// se contem a classe apagar
        console.log('Apagar')
        el.parentElement.remove(); // remove o pai do botao 'apagar'
        salvarTarefas();
    }
})

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '') // substitui a palavra apagar por nada
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas); // transforma o arrey em strings
    localStorage.setItem('tarefas', tarefasJSON); // salva strings no navegador

}

function adicionaTarefasSalvas(){ // para salvar no navegador
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas) // convertendo as strings em um arry novamente 
    console.log(listaDeTarefas);

    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();