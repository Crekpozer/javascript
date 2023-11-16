let numeros = []
let lista = document.querySelector('#txtl')

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

    let resposta = document.querySelector('#res')

    resposta.innerHTML = `A lista tem ${numeros.length} valores <br>`
    
    if (numeros.length == 0){
        alert('[ERRO] A lista está vazia, adicione algum valor antes de finalizar')
    } else {
        let maiornumero = 0

        for (var i = 0; i <= numeros.length; i++){ // Maior numero
            if (maiornumero < numeros[i]){
                maiornumero = Number(numeros[i])
            }
        }

        let menornumero =

        resposta.innerHTML = `O maior valor é ${maiornumero}`

    }
}
