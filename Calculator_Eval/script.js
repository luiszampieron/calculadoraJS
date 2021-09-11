let screen = getScreen()

////////// Events //////////
document.getElementById('screen').addEventListener('input', () => {
    screen.value = treatResult(screen.value)
})

////////// Utils //////////
function getScreen() {
    return document.getElementById('screen')
}

function separateResult() {
    return screen.value.split(' ')
}

function separateResultByElement() {
    return screen.value.split('')
}

function arrayToString(array) {
    return array.join('')
}

function treatResult(result) {
    let alpha = result.replace(/([a-zA-Z])/g, '')
    let comma = alpha.replace(',', '.')
    let exponence = comma.replace('^', '**')

    return exponence
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
        screen.value += value
    }
}

function calculateResult() {
    result = treatResult(screen.value)

    screen.value = eval(result)
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

    screen.value = arrayToString(resultArray)
}
