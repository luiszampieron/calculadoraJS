// FUNCÕES ----------------------------------------
// PEGAR VALOR DA TELA
function getValue() {
    return document.getElementById("screen").value
}

// SEPARAR VALOR EM UM ARRAY
function separarValue() {
    return getValue().split('')
}

// TRANSFORMA O ARRAY EM UMA STRING
function arrayParaString(valor) {
    const valueString = valor.toString().replace(/,/g, '')
    return valueString
}

// VALIDAÇÃO SE O VALOR PODE SER ADICIONADO OU NÃO
function validarValor(possivelValor) {
    valueArray = separarValue()

    if(valueArray[0] == undefined) {
        if(possivelValor == '.' || 
           possivelValor == '+' ||
           possivelValor == '-' ||
           possivelValor == 'x' ||
           possivelValor == '/' ||
           possivelValor == ')'   ) {
            return false
        } else {
            return true
        }
    } else {
        return true
    }
}

// MOSTRAR 'X' NA TELA
function mostrarNaTela(valor) {
    document.getElementById("screen").value = valor
    return getValue()
}

// ADICIONAR UM NÚMERO OU CARACTER NA TELA (8, 6, (, ), .)
function tela(valor) {
    if(validarValor(valor)) {
        const valueArray = separarValue()
        valueArray.push(valor)

        mostrarNaTela(arrayParaString(valueArray))  
    } else {
        alert('Ops, você não pode digitar isso aqui...')
    }
}

// APAGA ULTIMO ELEMENTO
function apagar() {
    const valueArray = separarValue()
    
    valueArray.pop()
    mostrarNaTela(arrayParaString(valueArray)) 
}

// LIMPAR A TELA
function zerar() {
    document.getElementById("screen").value = null
}

// PEGA O QUE FOI DIGITADO NO INPUT E CALCULA
function calcular() {
    for (let i = 0; i < valueArray.length; i++) {
        const valueArray = separarValue()
        console.log(valueArray)
        if (valueArray[i] == 'x' || valueArray[i] == '/') {
            if (valueArray[i] == 'x') {
                const valueCalculado = (Number(valueArray[i - 1]) * Number(valueArray[i + 1]))
                valueArray.splice(i - 1, 3, valueCalculado)
                mostrarNaTela(arrayParaString(valueArray))
            }
            if (valueArray[i] == '/') {
                const valueCalculado = (Number(valueArray[i - 1]) / Number(valueArray[i + 1]))
                valueArray.splice(i - 1, 3, valueCalculado)
                mostrarNaTela(arrayParaString(valueArray))
            }
        }
        if (valueArray[i] == '+' || valueArray[i] == '-') {
            if (valueArray[i] == '+') {
                const valueCalculado = (Number(valueArray[i - 1]) + Number(valueArray[i + 1]))
                valueArray.splice(i - 1, 3, valueCalculado)
                mostrarNaTela(arrayParaString(valueArray))
            }
            if (valueArray[i] == '-') {
                const valueCalculado = (Number(valueArray[i - 1]) - Number(valueArray[i + 1]))
                valueArray.splice(i - 1, 3, valueCalculado)
                mostrarNaTela(arrayParaString(valueArray))
            }
        }
    }
}


/*
let tela = function(valor) {
    let resultado = document.getElementById("screen")
    resultado.value += valor
}

let somar = function() {
    let digitos = document.getElementById("screen").value
    let str = digitos.split(' ')

    for(let i = 0; i <= str.length; i++) {
        if(str[i] == '+') {
            let valor1 = Number(str[i - 1])
            let valor2 = Number(str[i + 1])
            final = valor1 + valor2
        } else if(str[i] == '-') {
            let valor1 = Number(str[i - 1])
            let valor2 = Number(str[i + 1])
            final = valor1 - valor2
        } else if(str[i] == 'x') {
            let valor1 = Number(str[i - 1])
            let valor2 = Number(str[i + 1])
            final = valor1 * valor2
        } else if(str[i] == '/') {
            let valor1 = Number(str[i - 1])
            let valor2 = Number(str[i + 1])
            final = valor1 / valor2
        }
    }
    zerar()
    tela(final)
}

function sinal(operacao) {
    let informacao = document.getElementById('screen')
    let str = informacao.value.split(' ')
    if(informacao.value == '') {
        informacao.value = 0
    }
    if(str.length == 3) {
        somar()
    }
    tela(operacao)
}

function zerar() {
    let resultado = document.getElementById("screen")
    resultado.value = null
}

function apagar() {
    const resultado = document.getElementById("screen").value
    console.log(resultado)


}
*/