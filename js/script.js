const screen = document.getElementById('calc-input');
const buttons = document.getElementById('calc-buttons');
let result = 0;
let operationNumbers = [];

// Función suma
const Sum = ( operation ) => {
    operationNumbers = operation.split('+');
    result = operationNumbers.reduce(( a, b)=> parseFloat(a) + parseFloat(b) );
}

// Función resta
const Subtraction = ( operation ) => {
    operationNumbers = operation.split('-');
    result = operationNumbers.reduce(( a, b)=> parseFloat(a) - parseFloat(b) );
}

// Función multiplicación
const Multiplication = ( operation ) => {
    operationNumbers = operation.split('x');
    result = operationNumbers.reduce(( a, b)=> parseFloat(a) * parseFloat(b) );
}

// Función división
const Division = ( operation ) => {
    operationNumbers = operation.split('/');
    result = operationNumbers.reduce(( a, b)=> parseFloat(a) / parseFloat(b) );
}

// Función para eliminar un digíto o un operando
const Delete = () => {
        let valueToArray = Array.from( screen.value );
        if( valueToArray.length > 1 ){
            valueToArray.splice( valueToArray.length -1, 1);
            screen.value = parseFloat(valueToArray.join('').toString());
        }else{
            screen.value = '';
        }
}

// Funciones para las operaciones
const Operations = ( operation ) => {
    
    if( operation.includes('+')){
        Sum( operation );
    }

    if( operation.includes('-')){
        Subtraction( operation );
    }

    if( operation.includes('x')){
        Multiplication( operation );
    }

    if( operation.includes('/')){
        Division( operation );
    }

    screen.value = result;
}

// EventListeners
buttons.addEventListener('click', e => {

    let val = e.target.textContent;

    if( val === 'C') screen.value = '';
    else if( val === 'del'){
        Delete();
    }
    else screen.value += val;
    
    if( val === '=' ) {
       Operations( screen.value );
    }
});


document.addEventListener('keydown', e => {

    if( parseInt(e.key) >= 0 && parseInt(e.key) <= 9 || e.key === '+' || e.key === '-' || e.key === 'x' || e.key === '/' || e.key === '.') screen.value += e.key;

    if( e.key === 'Enter' ) Operations(screen.value);
    if( e.key === 'Backspace' ) Delete();
})