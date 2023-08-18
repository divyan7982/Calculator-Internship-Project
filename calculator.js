let displayValue = '';
let isCalculatorOn = true;

function appendToDisplay(value) {
    if (isCalculatorOn) {
        if (value === '%') {
            calculatePercentage();
        } else {
            displayValue += value;
        }
        updateDisplay();
    }
}

function clearDisplay() {
    if (isCalculatorOn) {
        displayValue = '';
        updateDisplay();
    }
}

function calculatePercentage() {
    if (displayValue === '') {
        displayValue = '0';
    } else {
        const currentValue = parseFloat(displayValue);
        const percentageValue = currentValue / 100;
        displayValue = percentageValue.toString();
    }
}


function calculateResult() {
    if (isCalculatorOn) {
        try {
            const result = eval(displayValue);
            displayValue = result.toString();
            updateDisplay();
        } catch (error) {
            displayValue = 'Error';
            updateDisplay();
        }
    }
}

function updateDisplay() {
    const display = document.getElementById('result');
    display.value = displayValue;
}

function toggleCalculator() {
    isCalculatorOn = !isCalculatorOn;
    const onOffButton = document.querySelector('.on-off-button');
    onOffButton.innerText = isCalculatorOn ? 'Off' : 'On';

    if (!isCalculatorOn) {
        displayValue = '';
        updateDisplay();
    }
}
