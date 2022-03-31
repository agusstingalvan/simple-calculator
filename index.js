window.addEventListener('load', () => {
    const display = document.querySelector('.display');
    const operadores = document.querySelectorAll('.operador');

    const operadoresArr = Array.from(operadores);

    const calcular = (cal) => {
        return eval(cal)
    }
    const borrarCalculo = () => {
        return display.textContent = ''
    }
    const calculadora = (button, operador) => {
        switch (operador) {
            case '=':
                button.addEventListener('click', (e) => {
                    display.textContent = calcular(display.textContent)
                })
                break;

            case 'C':
                button.addEventListener('click', borrarCalculo);
                break;

            default:
                button.addEventListener('click', () => {
                    display.textContent += button.innerHTML
                })
                break;
        }
    }
    operadoresArr.forEach(button => {
        calculadora(button, button.textContent)
    })

})

