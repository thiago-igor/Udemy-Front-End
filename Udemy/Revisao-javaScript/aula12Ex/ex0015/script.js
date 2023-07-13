function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = document.createElement('img') // criando uma tag "img"
    img.setAttribute('id', 'foto')  // id da img = "foto"
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Digite novamente!')
    }
    else{
        var fsex = document.getElementsByClassName('radsex')
        var idade = ano - Number(fano.value)

        var genero_masculino = document.getElementById('masc')
        var genero_feminino = document.getElementById('fem')

        if (genero_masculino.checked) {
            var genero = 'Homem'
            if (idade >=0 && idade < 8) {
                //Criança
                img.setAttribute('src', 'imagens/bebe-m.png')
            }
            else if (idade>=8 && idade<50) {
                //jovem / aduldo
                img.setAttribute('src', 'imagens/jovem-m.png')
            }
            else if (idade>=50 && idade < 150) {
                //idoso
                img.setAttribute('src', 'imagens/idoso-m.png')
            }
    
        }else if (genero_feminino.checked) {
            var genero = 'Mulher'
            if (idade >=0 && idade < 8) {
                //Criança
                img.setAttribute('src', 'imagens/bebe-f.png')
            }
            else if (idade>=8 && idade<50) {
                //jovem / aduldo
                img.setAttribute('src', 'imagens/jovem-f.png')
            }
            else if (idade>=50 && idade < 150) {
                //idoso
                img.setAttribute('src', 'imagens/idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
   

}