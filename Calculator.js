let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function appendNumber(number) {
    displayValue += number;
    document.getElementById('display').value = displayValue;
}

function appendOperator(operator) {
    displayValue += operator;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function calculateResult() {
    try {
        displayValue = displayValue
            .replace(/x/g, '*')
            .replace(/\^(\d+)/g, (match, p1) => `Math.pow(${p1}, 2)`)
            .replace(/(\d+)\!/g, (match, p1) => factorial(parseInt(p1)))
            .replace(/√(\d+)/g, (match, p1) => `Math.sqrt(${p1})`);

        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Chúng ta ko thuộc về nhau🙅‍♂️💔';
    }
}
