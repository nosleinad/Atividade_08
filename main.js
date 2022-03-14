
/*  Solucao: Questão 01 */
function calculaMedia() {

    let nota1 = document.getElementById('nota1').value
    let nota2 = document.getElementById('nota2').value
    let nota3 = document.getElementById('nota3').value


    let res = document.getElementById('media')

    let media = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / 10;

    res.innerHTML = `Resultado: A média das 3 notas foi: <strong>${media} `
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
    let valor = document.getElementById('valor').value
    let intervalo = document.getElementById('intervalo')


    if (valor >= 0 && valor <= 25) {
        resultado = "[0,25]";
    }
    else if (valor > 25 && valor <= 50) {
        resultado = "[25,50]";
    }
    else if (valor > 50 && valor <= 75) {
        resultado = "[50,75]";
    }
    else if (valor > 75 && valor <= 100) {
        resultado = "[75,100]";
    }
    else {
        resultado = "Fora de intervalo";
    }

    intervalo.innerHTML = `Resultado: O valor digitado esta no intervalo ${resultado}`
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