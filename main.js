let sumar = document.querySelector('.sumar');

sumar.addEventListener('click', suma)

function suma() {
    let operandoA = parseInt(document.querySelector('.sumandoA').value) || 0;

    let operandoB = parseInt(document.querySelector('.sumandoB').value) || 0;
    let resultado = document.querySelector('.resultado');

    let suma = operandoA + operandoB;

    resultado.textContent= `El resultado es ${suma}.`;
}