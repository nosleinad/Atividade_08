
/*  Solucao: Questão 01 */
function calculaMedia() {

    let n1 = window.document.getElementById('nota1')
    let n2 = window.document.getElementById('nota2')
    let n3 = window.document.getElementById('nota3')

    let nota1 = Number(n1.value)
    let nota2 = Number(n2.value)
    let nota3 = Number(n3.value)

    let res = window.document.getElementById('media')

    let media = (nota1 + nota2 + nota3) / 3;

    res.innerHTML = `Resultado: A média das 3 notas foi: <strong>${media.toFixed(2)} `
}

/*  Solucao: Questão 02 */

function validaPassword() {
    let password = window.document.getElementById('password')
    let senha = 2002

    let resultado = window.document.getElementById('resultado')

    if (password.value != senha) {
        resultado.innerHTML = `Resultado: <strong>Senha Invalida.`
    }
    else {
        resultado.innerHTML = `Resultado: Acesso Permitido. <strong>Senha: ${senha} `
    }
}

/*  Solucao: Questão 03 */
function calculaIntervalo() {
    let valor = window.document.getElementById('valor').value
    let intervalo = window.document.getElementById('intervalo')

    /* if (valor >= 0 || valor <= 25) */
    if (valor == '')
     {
        intervalo.innerHTML = `Resultado: O valor digitado é invalido`;
        /* intervalo.innerHTML = `Resultado: O valor digitado esta no intervalo [0,25]`; */
    }
   else if (valor){
        intervalo.innerHTML = `Resultado: O valor digitado esta no intervalo [25,50]`
       /*  resultado.innerHTML = `Resultado: O valor digitado esta no intervalo [50,75]`
        resultado.innerHTML = `Resultado: O valor digitado esta no intervalo [75,100]` */
    }
    



}

/*  Solucao: Questão 04 */


/*  Solucao: Questão 05 */


/*  Solucao: Questão 06 */

function calculaSalario() {
    let funcionario = window.document.getElementById('nome').value
    let valorhora = window.document.getElementById('valorHora').value
    let totalHoras = window.document.getElementById('totalHoras').value
    let res = window.document.getElementById('salario')

    let total = totalHoras * valorhora

    res.innerHTML = `Resultado: O funcionario <strong>${funcionario} </strong> vai receber <strong>R$ ${total.toFixed(2)} `
}

/*  Solucao: Questão 07 */

function calculaConsumo() {

    let distancia = window.document.getElementById('distancia').value
    let gasto = window.document.getElementById('gasto').value
    let res = window.document.getElementById('resulMedio')

    let consumoMedio = distancia / gasto

    res.innerHTML = `Resultado: O automóvel fez o consumo médio de: <strong>${consumoMedio.toFixed(3)} km/l`

}