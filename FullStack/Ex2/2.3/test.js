let display = document.getElementById('display');
    let currentInput = '';

    function appendNumber(number) {
        currentInput += number;
        display.value = currentInput;
    }

    function appendOperator(operator) {
        if (currentInput !== '') {
            currentInput += operator;
            display.value = currentInput;
        }
    }

    function clearDisplay() {
        currentInput = '';
        display.value = '';
    }

    function calculateResult() {
        try {
            currentInput = eval(currentInput).toString();
            display.value = currentInput;
        } catch (e) {
            display.value = 'Error';
            currentInput = '';
        }
    }