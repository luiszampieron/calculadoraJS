// FUNCÕES ----------------------------------------
// PEGAR VALOR DA TELA
function getValue() {
    return document.getElementById("screen").value
}

// SEPARAR VALOR EM UM ARRAY NUMEROS COMPLETOS
function separarValue() {
    return getValue().split(' ')
}
// SEPARAR VALOR EM UM ARRAY CADA INDICE UM NÚMERO
function separarValueIndice() {
    return getValue().split('')
}

// TRANSFORMA O ARRAY EM UMA STRING
function arrayParaString(valorArray) {
    const valueString = valorArray.toString().replace(/,/g, '')
    return valueString
}

// FUNCTION COMPLEMENTAR DA VALIDAÇÃO
function possivelValorOk(possivelValor) {
    if (possivelValor == '.' ||
        possivelValor == ' + ' ||
        possivelValor == ' * ' ||
        possivelValor == ' / ' ||
        possivelValor == ' - ') {
        return true
    } else return false
}

// VALIDAÇÃO SE O VALOR PODE SER ADICIONADO OU NÃO
function validarValor(possivelValor) {
    valueArray = separarValueIndice()

    if (valueArray[0] == undefined) {
        if (possivelValor == '.' ||
            possivelValor == ' + ' ||
            possivelValor == ' * ' ||
            possivelValor == ' / ' ||
            possivelValor == ' ) ') {
            return false
        } else return true
    }

    if ((possivelValorOk(possivelValor) && valueArray[valueArray.length - 1] == '.') ||
        (possivelValorOk(possivelValor) && valueArray[valueArray.length - 2] == '*') ||
        (possivelValorOk(possivelValor) && valueArray[valueArray.length - 2] == '/') ||
        (possivelValorOk(possivelValor) && valueArray[valueArray.length - 2] == '+') ||
        (possivelValorOk(possivelValor) && valueArray[valueArray.length - 2] == '-') ||
        (possivelValor == ' ( ' && valueArray[valueArray.length - 2] == '(') ||
        (possivelValor == ' ) ' && valueArray[valueArray.length - 2] == ')')) {
        return false
    }

    return true
}

// MOSTRAR 'X' NA TELA
function mostrarNaTela(valor) {
    document.getElementById("screen").value = valor
    return getValue()
}

// ADICIONAR UM NÚMERO OU CARACTER NA TELA (8, 6, (, ), .)
function tela(valor) {
    if (validarValor(valor)) {
        let resultado = document.getElementById("screen")
        resultado.value += valor
    }
}

// APAGA ULTIMO ELEMENTO
function apagar() {
    const valueArray = separarValueIndice()

    if (valueArray[valueArray.length - 1] == ' ') {
        let contador = 0
        while (contador < 3) {
            valueArray.pop()
            contador++
        }
    } else valueArray.pop()

    mostrarNaTela(arrayParaString(valueArray))
}

// LIMPAR A TELA
function zerar() {
    document.getElementById("screen").value = null
}

// PEGA O QUE FOI DIGITADO NO INPUT E CALCULA
function calcular() {
    value = getValue()
    mostrarNaTela(eval(value))
}