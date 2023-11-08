function Contar() {
    var inicio = Number(document.querySelector('#inicio').value)
    var fim = Number(document.querySelector('#fim').value)
    var passo = Number(document.querySelector('#passo').value)
    var res = document.querySelector('div#res')

    if (inicio == '' || inicio >= fim){
        res.innerHTML = 'Impossivel contar!'
        if (passo == 0){
            passo = 1
        }
    
    } else {
        
        for (i = inicio; i <= fim; i += passo){
            if (i == inicio) {
                res.innerHTML = `${i}`
                res.innerHTML += `👉`
            } else if (i < fim){
                res.innerHTML += `${i}`
                res.innerHTML += `👉`
            } else if (i == fim){
                res.innerHTML += `${i}`
            } else {
                res.innerHTML += `${i}`
            }
            
        }

        res.innerHTML += `🏴`


    }

    /*
    for (i = inicio; i <= fim; i += passo){
        res.innerHTML += `${i}`
        
        if (i < fim){
            res.innerHTML += `👉`
        } else {
            res.innerHTML += `🏴`
        }
    }
    */
}

