////////// Utils //////////
function getResult() {
    return document.getElementById("screen").value
}

function separateResult() {
    return getResult().split(' ')
}

function separateResultByElement() {
    return getResult().split('')
}

function arrayToString(array) {
    return array.join('')
}

function treatResult(result) {
    return result.replace(/([a-zA-Z])/g, '')
}

////////// Validation //////////
function isValidOperator(char) {
    if (char == '.' ||
        char == ' + ' ||
        char == ' * ' ||
        char == ' / ' ||
        char == ' - ') {
        return true
    } else return false
}

function isValidChar(char) {
    resultArray = separateResultByElement()

    if (resultArray[0] == undefined) {
        if (char == '.' ||
            char == ' + ' ||
            char == ' * ' ||
            char == ' / ' ||
            char == ' ) ') {
            return false
        } else return true
    }

    if ((isValidOperator(char) && resultArray[resultArray.length - 1] == '.') ||
        (isValidOperator(char) && resultArray[resultArray.length - 2] == '*') ||
        (isValidOperator(char) && resultArray[resultArray.length - 2] == '/') ||
        (isValidOperator(char) && resultArray[resultArray.length - 2] == '+') ||
        (isValidOperator(char) && resultArray[resultArray.length - 2] == '-') ||
        (char == ' ( ' && resultArray[resultArray.length - 2] == '(') ||
        (char == ' ) ' && resultArray[resultArray.length - 2] == ')')) {
        return false
    }

    return true
}

////////// Base Functions //////////
function addValueToResult(value) {
    if (isValidChar(value)) {
        let screen = document.getElementById("screen")
        screen.value += value
    }
}

function calculateResult() {
    result = getResult()
    result = treatResult(result)

    setResult(eval(result))
}

function backspaceResult() {
    const resultArray = separateResultByElement()

    if (resultArray[resultArray.length - 1] == ' ') {
        let counter = 0
        while (counter < 3) {
            resultArray.pop()
            counter++
        }
    } else resultArray.pop()

    setResult(arrayToString(resultArray))
}

function clearResult() {
    document.getElementById("screen").value = null
}

function setResult(result) {
    document.getElementById("screen").value = result
    return getResult()
}