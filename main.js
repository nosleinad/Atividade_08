
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
function calculoSalario(){
    let salario = document.getElementById("salario").value
    let resultado = document.getElementById('resultado04')
    let novoSalario = 0;
    let ganho = 0;
    let percentual = 0;


    if (salario >= 0 && salario <= 400){
        percentual = 15;
        ganho = salario * 0.15;
        novoSalario = salario + ganho;
    }
    if (salario > 400 && salario <= 800){
        percentual = 12;
        ganho = salario * 0.12;
        novoSalario = salario + ganho;
    }
    if (salario > 800 && salario <= 1200){
        percentual = 10;
        ganho = salario * 0.10;
        novoSalario = salario + ganho;
    }
    if (salario > 1200 && salario <= 2000){
        percentual = 7;
        ganho = salario * 0.07;
        novoSalario = salario + ganho;
    }
    if (salario > 2000 ){
        percentual = 4;
        ganho = salario * 0.04;
        novoSalario = salario + ganho;
    }

    resultado.innerHTML = `Resultado: Novo salario: ${novoSalario}, Ganho: ${ganho}, Percentual: ${percentual}%`
}

/*  Solucao: Questão 05 */


/*  Solucao: Questão 06 */

function calculaSalario() {
    let funcionario = document.getElementById('nome').value
    let valorhora = document.getElementById('valorHora').value
    let totalHoras = document.getElementById('totalHoras').value
    let res = document.getElementById('calSalario')

    let total = totalHoras * valorhora

    res.innerHTML = `Resultado: O funcionario <strong>${funcionario} </strong> vai receber <strong>R$ ${total} `
}

/*  Solucao: Questão 07 */

function calculaConsumo() {

    let distancia = window.document.getElementById('distancia').value
    let gasto = window.document.getElementById('gasto').value
    let res = window.document.getElementById('resulMedio')

    let consumoMedio = distancia / gasto

    res.innerHTML = `Resultado: O automóvel fez o consumo médio de: <strong>${consumoMedio.toFixed(3)} km/l`

}