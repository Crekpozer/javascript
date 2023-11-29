let pessoa = { /* Declaração do Objeto */
    nome: "Jonatas", /* Variavel string dentro do objeto*/
    idade: 35, /* Variavel number dentro do objeto*/
    feliz: true, /* Variavel boleana dentro do objeto*/
    pets: ["cachorro", "gato"], /* Array dentro do objeto */
    carros: { /* Objeto dentro do Objeto*/
        camaro: {
            placa: "123456",
            cor: "verde"
        },
        uno: {
            placa: "9876543",
            cor: "branco"
        }
    },
    andar: function(km){ /* Função dentro do objeto */
        console.log(`${pessoa.nome} andou ${km}Km`)
    }
}
pessoa.andar(20) /*Como executar a função*/

console.log(pessoa.carros.camaro.placa) /*Como consultar objetos dentro de objetos*/