//Callbacks
//Function type Callback

function show(result) {
    console.log('Result: ' + result);
}

function operation(op1, op2, operatorCallback, showCallback) {
    showCallback(operatorCallback(op1, op2));
}

operation(5, 5, (op1, op2) => { return op1 * op2 }, show);
operation(5, 5, (op1, op2) => { return op1 + op2 }, show);
operation(5, 5, (op1, op2) => { return op1 - op2 }, show);
operation(5, 5, (op1, op2) => { return op1 / op2 }, show);