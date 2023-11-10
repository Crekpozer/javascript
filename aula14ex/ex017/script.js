function gerarTabuada(){
    
    let numero = document.querySelector('#txtnumero')
    let campo = document.querySelector('#ires')

    if (numero.value.length == 0){
        window.alert('[ERRO]Preencha o campo numero!')
    } else {
        
        campo.innerHTML = ''
        
        for (i=1;i<=10; i++){
            let opcao = document.createElement('option')
            var n = Number(numero.value)
            var res = n * i
            opcao.setAttribute ('value',`${n}x${i}=${res}`)
            opcao.innerHTML = `${n}X${i}=${res}` 
            campo.appendChild(opcao)
        }

    }

}


