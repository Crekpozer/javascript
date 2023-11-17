let numeros = []
let lista = document.querySelector('#txtl')
let resposta = document.querySelector('#res')

function adicionar(){
    let valor = document.querySelector('#txtn')
    
    if (valor.value.length == 0 || valor.value > 100){
        alert('[ERRO]O campo Número está vazio, coloque um valor antes de continuar')
    } else {
        let opcao = document.createElement('option')
        opcao.setAttribute('value', `${valor.value}`)
        opcao.innerHTML = `Valor ${valor.value} adicionado`
        
        numeros.push(valor.value)
        lista.appendChild(opcao)
    }
}

function finalizar(){
    
    resposta.innerHTML = `<p style="margin:10px">A lista tem ${numeros.length} valores <br></p>`
    
    if (numeros.length == 0){
        alert('[ERRO] A lista está vazia, adicione algum valor antes de finalizar')
    } else {
        let maiornumero = 0

        for (var i = 0; i <= numeros.length; i++){ // Maior numero
            if (maiornumero < numeros[i]){
                maiornumero = Number(numeros[i])
            }
        }
        
        resposta.innerHTML += `<p style="margin:10px">O maior valor é ${maiornumero} <br></p>`

        let menornumero = 101

        for (var i = 0; i <= numeros.length; i++){
            if (menornumero > numeros[i]){
                menornumero = Number(numeros[i])
            }
        }

        resposta.innerHTML += `<p style="margin:10px">O menor valor é ${menornumero} <br></p>`

        let somatotal = 0

        for (var i = 0; i < numeros.length; i++){
            somatotal = somatotal + Number(numeros[i])
        }

        resposta.innerHTML += `<p style="margin:10px">A soma total dos valores é ${somatotal} <br></p>`
        
        let mediavalores = somatotal / numeros.length

        resposta.innerHTML += `<p style="margin:10px">A media dos valores é ${mediavalores} <br></p>`
    }
}
