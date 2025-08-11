
const display = document.getElementById('display');

function addToDisplay(value) {
    display.value += value;
    console.log('Added to display: ' + value);
    console.log('Current expression: ' + display.value);
}

function clearDisplay() {
    display.value = '';
    console.log('Display cleared');
}

function deleteLastChar() {
    const oldValue = display.value;
    display.value = display.value.toString().slice(0, -1);
    console.log('Deleted last character from: ' + oldValue);
    console.log('Current expression: ' + display.value);
}

function calculateResult() {
    try {
        const expression = display.value;
        const result = eval(expression);
        
        
        console.log("--------------------")
        console.log('CALCULATION PERFORMED:');
        console.log('Expression: ' + expression);
        console.log('Result: ' + result);
        console.log('=====================');
        
        display.value = result;
        
    } catch (error) {
        console.error('Calculation Error: ' + error.message);
        display.value = 'Error';
    }
}

