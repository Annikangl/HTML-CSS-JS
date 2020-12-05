function square_expression() {
    let a = document.getElementById('input-a').value;
    let b = document.getElementById('input-b').value;
    let c = document.getElementById('input-c').value;
    let result = document.querySelector('.result');

    if (a != '' && b != '' && c != '') {
        result.innerHTML = '';
        let d = Math.pow(b,2) - 4 * a * c;
        
        if (d < 0) {
            result.innerHTML = 'Дискриминант D < 0, следовательно уравнение не имеет действительных корней';
        } else if (d == 0) {
            let x = - b / (2 * a);
            result.innerHTML = 'Дискриминант D = 0, следовательно уравнение имеет один действительный корень, x =' + x;
        } else if (d > 0) {
            let x1 = -b / ( 2 * a ) + Math.sqrt( d ) / ( 2 * a );
            let x2 = -b / ( 2 * a ) - Math.sqrt( d ) / ( 2 * a );
            result.innerHTML = 'Дискриминант D > 0, следовательно уравнение имеет два действительных корня, x1 = ' + x1.toFixed(2) + ' и x2 = ' + x2.toFixed(2);
        }
    } else {
        result.innerHTML = 'Заполните все поля';
        return false;
    }
    
}