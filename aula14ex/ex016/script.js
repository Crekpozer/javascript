function Contar() {
    var inicio = Number(document.querySelector('#inicio').value)
    var fim = Number(document.querySelector('#fim').value)
    var passo = Number(document.querySelector('#passo').value)
    var res = document.querySelector('div#res')

    for (i = inicio; i <= fim; i += passo){
        res.innerHTML += `${i}`
        
        if (i < fim){
            res.innerHTML += `👉`
        } else {
            res.innerHTML += `🏴`
        }
    }
}